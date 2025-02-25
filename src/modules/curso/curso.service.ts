import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from '../../entities/curso.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async create(curso: Curso) {
    return this.cursoRepository.save(curso);
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  async findOne(id: string) {
    return this.cursoRepository.findOne({ where: { id_curso : id } });
  }

  async update(id: string, curso: Partial<Curso>) {
    return this.cursoRepository.update(id, curso);
  }

  async remove(id: string) {
    return this.cursoRepository.delete(id);
  }
}