import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from '../../entities/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule]
})
export class EstudianteModule {}