import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from '../../entities/matricula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matricula])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule]
})
export class MatriculaModule {}