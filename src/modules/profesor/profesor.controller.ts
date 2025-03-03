import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
