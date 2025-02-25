// src/entities/matricula.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Curso } from './curso.entity';

@Entity()
export class Matricula {
  @PrimaryGeneratedColumn('uuid')
  id_matricula: string;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.matriculas)
  estudiante: Estudiante;

  @ManyToOne(() => Curso, (curso) => curso.matriculas)
  curso: Curso;

  @Column()
  fecha_inscripcion: Date;

  @Column({ nullable: true })
  calificacion_final: number;
}