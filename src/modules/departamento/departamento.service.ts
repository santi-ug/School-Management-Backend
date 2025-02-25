import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from '../../entities/departamento.entity';


@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(departamento: Departamento) {
    return this.departamentoRepository.save(departamento);
  }

  async findAll() {
    return this.departamentoRepository.find();
  }

    async findOne(id: string) {
        return this.departamentoRepository.findOne({ where: { id_departamento: id } });
    }

  async update(id: string, departamento: Partial<Departamento>) {
    return this.departamentoRepository.update(id, departamento);
  }

  async remove(id: string) {
    return this.departamentoRepository.delete(id);
  }
}
