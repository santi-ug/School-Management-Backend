import { Body, Controller, Get, Post , Put, Delete} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.notasEvaluacionService.findOne(id);
  }

  @Put(':id')
  update(@Body('id') id: string, @Body() data: any) {
    return this.notasEvaluacionService.update(id, data);
  }

  @Delete(':id')
  remove(@Body('id') id: string) {
    return this.notasEvaluacionService.remove(id);
  }

  

}
