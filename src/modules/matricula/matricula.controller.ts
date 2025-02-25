import { Controller, Get, Post, Body } from '@nestjs/common';
import { MatriculaService } from './matricula.service';

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.matriculaService.create(data);
  }
}