import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotasEvaluacion } from '../../entities/notas_evaluacion';



@Injectable()
export class NotasEvaluacionService {
  constructor(
    @InjectRepository(NotasEvaluacion)
    private readonly notasEvaluacionRepository: Repository<NotasEvaluacion>,
  ) {}

  async create(nota: NotasEvaluacion) {
    return this.notasEvaluacionRepository.save(nota);
  }

  async findAll() {
    return this.notasEvaluacionRepository.find();
  }

  async findOne(id: string) {
    return this.notasEvaluacionRepository.findOne({ where: { id_nota : id } });
  }

  async update(id: string, nota: Partial<NotasEvaluacion>) {
    return this.notasEvaluacionRepository.update(id, nota);
  }

  async remove(id: string) {
    return this.notasEvaluacionRepository.delete(id);
  }
}
