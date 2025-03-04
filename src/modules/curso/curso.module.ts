// src/modules/curso.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from '../../entities/curso.entity';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [TypeOrmModule],
})
export class CursoModule {}
