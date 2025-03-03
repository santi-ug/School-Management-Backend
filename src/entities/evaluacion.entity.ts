// src/entities/evaluacion.entity.ts
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Curso } from './curso.entity';
import { NotasEvaluacion } from './notas_evaluacion';

@Entity()
export class Evaluacion {
  @PrimaryGeneratedColumn('uuid')
  id_evaluacion: string;

  @ManyToOne(() => Curso, (curso) => curso.evaluaciones)
  curso: Curso;

  @Column()
  fecha_realizacion: Date;

  @OneToMany(() => NotasEvaluacion, (notas) => notas.evaluacion)
  notas: NotasEvaluacion[];
}
