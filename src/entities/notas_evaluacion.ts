// src/entities/notas_evaluacion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Evaluacion } from './evaluacion.entity';

@Entity()
export class NotasEvaluacion {
  @PrimaryGeneratedColumn('uuid')
  id_nota: string;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.notas)
  estudiante: Estudiante;

  @ManyToOne(() => Evaluacion, (evaluacion) => evaluacion.notas)
  evaluacion: Evaluacion;

  @Column()
  calificacion: number;
}
