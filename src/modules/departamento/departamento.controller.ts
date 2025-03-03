import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.departamentoService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.departamentoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoService.remove(id);
  }
}
