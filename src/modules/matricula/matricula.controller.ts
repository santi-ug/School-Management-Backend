import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.matriculaService.findOne(id);
  }

  @Put(':id')
  update(@Body('id') id: string, @Body() data: any) {
    return this.matriculaService.update(id, data);
  }

  @Delete(':id')
  remove(@Body('id') id: string) {
    return this.matriculaService.remove(id);
  }
}
