import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluacion } from '../../entities/evaluacion.entity';
import { EvaluacionService } from './evaluacion.service';
import { EstudianteModule } from '../estudiante/estudiante.module'; // Importar correctamente

@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluacion]),
    EstudianteModule, 
  ],
  providers: [EvaluacionService],
  exports: [EvaluacionService],
})
export class EvaluacionModule {}
