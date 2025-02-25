import { Controller, Get, Post, Body } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';

@Controller('evaluaciones')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @Get()
  findAll() {
    return this.evaluacionService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.evaluacionService.create(data);
  }
}
