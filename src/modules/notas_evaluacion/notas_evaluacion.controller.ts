import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotasEvaluacionService } from './notas_evaluacion.service';

@Controller('notas_evaluacion')
export class NotasEvaluacionController {
  constructor(
    private readonly notasEvaluacionService: NotasEvaluacionService,
  ) {}

  @Get()
  findAll() {
    return this.notasEvaluacionService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.notasEvaluacionService.create(data);
  }
}
