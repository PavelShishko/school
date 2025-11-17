import { GroupEntity } from "../../groups/entities/group.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('students')
export class StudentEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({name: 'second_name'})
    secondName: string;

    @Column({name: 'group_id', type: 'uuid'})
    groupId: string

    @ManyToOne(() => GroupEntity, (group) => group.students)
    @JoinColumn({name: 'group_id'})
    group: GroupEntity

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}