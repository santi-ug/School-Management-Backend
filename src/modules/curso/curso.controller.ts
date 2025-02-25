import { Controller, Get, Post, Body } from '@nestjs/common';
import { CursoService } from './curso.service';


@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.cursoService.create(data);
  }
}