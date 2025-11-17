import { StudentEntity } from "../../students/entities/student.entity";
import { TeacherEntity } from "../../teachers/entities/teacher.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class GroupEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => StudentEntity, (student) => student.group)
    students: StudentEntity[];

    @ManyToMany(() => TeacherEntity, (teacher) => teacher.groups)
    @JoinTable({
        name: 'group_teachers', 
        joinColumn: {name: 'group_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'teacher_id', referencedColumnName: 'id'}
    })
    teachers: TeacherEntity[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}