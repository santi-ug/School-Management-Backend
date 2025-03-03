import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.estudianteService.create(data);
  }
}
