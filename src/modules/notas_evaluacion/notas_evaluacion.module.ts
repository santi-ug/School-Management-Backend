import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasEvaluacion } from '../../entities/notas_evaluacion';

@Module({
  imports: [TypeOrmModule.forFeature([NotasEvaluacion])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class NotasEvaluacionModule {}
