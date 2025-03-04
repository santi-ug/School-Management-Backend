import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  @Exclude() // Excluye este campo al serializar
  password: string;

  @Column({ default: 'usuario' })
  rol: string; // 'admin', 'profesor', 'estudiante', 'usuario'

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date;

  
}