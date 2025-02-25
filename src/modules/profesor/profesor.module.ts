import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from '../../entities/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule]
})
export class ProfesorModule {}