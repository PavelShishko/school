import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { GroupEntity } from 'src/groups/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, GroupEntity])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
