import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.studentsService.findOne(id)
  }

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto)
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() dto: CreateStudentDto) {
    return this.studentsService.edit(id, dto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentsService.delete(id)
  }
}
