import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluacion } from '../../entities/evaluacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluacion])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class EvaluacionModule {}
