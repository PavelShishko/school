import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  findAll(){
    return this.groupsService.findAll()
  }

  @Get(':id/students')
  findById(@Param('id') id: string) {
    return this.groupsService.findById(id)
  }

  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.groupsService.create(dto)
  }
}
