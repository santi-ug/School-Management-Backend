// src/entities/estudiante.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Matricula } from './matricula.entity';
import { NotasEvaluacion } from './notas_evaluacion';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn('uuid')
  id_estudiante: string;

  @Column()
  nombre: string;

  @Column()
  fecha_nacimiento: Date;

  @OneToMany(() => Matricula, (matricula) => matricula.estudiante)
  matriculas: Matricula[];

  @OneToMany(() => NotasEvaluacion, (notas) => notas.estudiante)
  notas: NotasEvaluacion[];
}
