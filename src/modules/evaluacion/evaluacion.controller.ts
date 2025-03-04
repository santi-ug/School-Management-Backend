import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.evaluacionService.findOne(id);
  }

  @Put(':id')
  update(@Body('id') id: string, @Body() data: any) {
    return this.evaluacionService.update(id, data);
  }

  @Delete(':id')
  remove(@Body('id') id: string) {
    return this.evaluacionService.remove(id);
  }

}
