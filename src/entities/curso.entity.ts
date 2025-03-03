// src/entities/curso.entity.ts
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { Matricula } from './matricula.entity';
import { Profesor } from './profesor.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn('uuid')
  id_curso: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  horario: string;

  @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
  profesor: Profesor;

  @OneToMany(() => Matricula, (matricula) => matricula.curso)
  matriculas: Matricula[];

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.curso)
  evaluaciones: Evaluacion[];
}
