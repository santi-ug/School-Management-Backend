import { Body, Controller, Get, Param, Post ,Put, Delete} from '@nestjs/common';
import { EstudianteService } from './estudiante.service';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.estudianteService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(id);
  }


  @Post()
  create(@Body() data: any) {
    return this.estudianteService.create(data);
  }
}
