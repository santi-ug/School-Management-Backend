import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.profesorService.create(data);
  }

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.profesorService.findOne(id);
  }
}
