// src/entities/curso.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Matricula } from './matricula.entity';
import { Evaluacion } from './evaluacion.entity';

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