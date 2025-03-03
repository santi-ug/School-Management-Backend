import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Profesor } from './profesor.entity';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn('uuid')
  id_departamento: string;

  @Column()
  nombre: string;

  @OneToMany(() => Profesor, (profesor) => profesor.departamento)
  profesores: Profesor[];
}
