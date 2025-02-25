import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from '../../entities/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  async create(profesor: Profesor) {
    return this.profesorRepository.save(profesor);
  }

  async findAll() {
    return this.profesorRepository.find();
  }

  async findOne(id: string) {
    return this.profesorRepository.findOne({ where: { id_profesor: id } });
  }

  async update(id: string, profesor: Partial<Profesor>) {
    return this.profesorRepository.update(id, profesor);
  }

  async remove(id: string) {
    return this.profesorRepository.delete(id);
  }
}