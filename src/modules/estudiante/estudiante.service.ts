import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../../entities/estudiante.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(estudiante: Estudiante) {
    return this.estudianteRepository.save(estudiante);
  }

  async findAll() {
    return this.estudianteRepository.find();
  }

  async findOne(id: string) {
    return this.estudianteRepository.findOne({ where: { id_estudiante: id } });
  }

  async update(id: string, estudiante: Partial<Estudiante>) {
    return this.estudianteRepository.update(id, estudiante);
  }

  async remove(id: string) {
    return this.estudianteRepository.delete(id);
  }
}
