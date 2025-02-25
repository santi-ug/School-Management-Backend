
// src/modules/curso.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from '../../entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule]
})
export class CursoModule {}