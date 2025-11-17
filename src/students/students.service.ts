import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/student.dto';
import { GroupEntity } from 'src/groups/entities/group.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(StudentEntity)
        private readonly studentRepository: Repository<StudentEntity>,
        @InjectRepository(GroupEntity)
        private readonly groupRepository: Repository<GroupEntity>
    ) {}

    async findAll() {
        return this.studentRepository.find({relations: ['group'], order: {
            createdAt: "DESC"
        }})
    }

    async findOne(id: string) {
        const student = await this.studentRepository.findOne({where: {id}})

        if (!student) throw new NotFoundException()

        return student
    }

    async filterGroup(id: string) {
        const group = await this.groupRepository.findOne({where: {id}})

        if (!group) throw new NotFoundException()

        return group.students
    }

    async create(dto: CreateStudentDto): Promise<StudentEntity> {
        const {name, secondName, groupId} = dto
        const group = await this.groupRepository.findOne({where: {id: groupId}})

        if (!group) throw new NotFoundException('Группа не была найдена');


        const student = this.studentRepository.create({
            name,
            secondName,
            group
        });

        return await this.studentRepository.save(student);
    }

    async edit(id: string, dto: CreateStudentDto) {
        const student = await this.findOne(id)

        Object.assign(student, dto)

        await this.studentRepository.save(student)

        return true
    }

    async delete(id: string) {
        const student = await this.findOne(id)

        await this.studentRepository.remove(student)

        return student.id
    }
}
