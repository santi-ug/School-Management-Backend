// src/entities/profesor.entity.ts
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Curso } from './curso.entity';
import { Departamento } from './departamento.entity';

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
