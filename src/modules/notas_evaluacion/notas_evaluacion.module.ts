import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasEvaluacion } from '../../entities/notas_evaluacion';
import { NotasEvaluacionController } from './notas_evaluacion.controller';
import { NotasEvaluacionService } from './notas_evaluacion.service';


@Module({
  imports: [TypeOrmModule.forFeature([NotasEvaluacion])],
  controllers: [NotasEvaluacionController],
  providers: [NotasEvaluacionService],
  exports: [TypeOrmModule],
})
export class NotasEvaluacionModule {}
