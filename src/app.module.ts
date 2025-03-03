import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoModule } from './modules/curso/curso.module';
import { DepartamentoModule } from './modules/departamento/departamento.module';
import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { EvaluacionModule } from './modules/evaluacion/evaluacion.module';
import { MatriculaModule } from './modules/matricula/matricula.module';
import { NotasEvaluacionModule } from './modules/notas_evaluacion/notas_evaluacion.module';
import { ProfesorModule } from './modules/profesor/profesor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Canon11',
      database: 'academic_management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DepartamentoModule,
    ProfesorModule,
    CursoModule,
    EstudianteModule,
    MatriculaModule,
    EvaluacionModule,
    NotasEvaluacionModule,
  ],
})
export class AppModule {}
