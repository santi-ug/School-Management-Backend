import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from '../../entities/evaluacion.entity';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,
  ) {}

  async create(evaluacion: Evaluacion) {
    return this.evaluacionRepository.save(evaluacion);
  }

  async findAll() {
    return this.evaluacionRepository.find();
  }

  async findOne(id: string) {
    return this.evaluacionRepository.findOne({ where: { id_evaluacion: id } });
  }

  async update(id: string, evaluacion: Partial<Evaluacion>) {
    return this.evaluacionRepository.update(id, evaluacion);
  }

  async remove(id: string) {
    return this.evaluacionRepository.delete(id);
  }
}
