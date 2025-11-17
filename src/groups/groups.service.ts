import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from './entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
    constructor(
            @InjectRepository(GroupEntity)
            private readonly groupRepository: Repository<GroupEntity>
    ) {}

    async findAll () {
        return this.groupRepository.find({relations: ['students']})
    }

    async findById(id: string) {
        const group = await this.groupRepository.findOne({where: {id}, relations: ['students']})

        if (!group) throw new NotFoundException()

        return group.students
    }

    async create(dto: CreateGroupDto) {
        const group = this.groupRepository.create(dto);

        return await this.groupRepository.save(group)
    }
    
}
