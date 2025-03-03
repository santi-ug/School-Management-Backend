// src/modules/departamento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from '../../entities/departamento.entity';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoService } from './departamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
  exports: [TypeOrmModule],
})
export class DepartamentoModule {}
