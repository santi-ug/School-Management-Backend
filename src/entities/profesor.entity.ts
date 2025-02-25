// src/entities/profesor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Departamento } from './departamento.entity';
import { Curso } from './curso.entity';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn('uuid')
  id_profesor: string;

  @Column()
  nombre: string;

  @Column()
  fecha_contratacion: Date;

  @ManyToOne(() => Departamento, (departamento) => departamento.profesores)
  departamento: Departamento;

  @OneToMany(() => Curso, (curso) => curso.profesor)
  cursos: Curso[];
}