import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from '../../entities/matricula.entity';

@Injectable()
export class MatriculaService {
  constructor(
    @InjectRepository(Matricula)
    private readonly matriculaRepository: Repository<Matricula>,
  ) {}

  async create(matricula: Matricula) {
    return this.matriculaRepository.save(matricula);
  }

  async findAll() {
    return this.matriculaRepository.find();
  }

  async findOne(id: string) {
    return this.matriculaRepository.findOne({ where: { id_matricula: id } });
  }

  async update(id: string, matricula: Partial<Matricula>) {
    return this.matriculaRepository.update(id, matricula);
  }

  async remove(id: string) {
    return this.matriculaRepository.delete(id);
  }
}
