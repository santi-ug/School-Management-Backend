import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { CursoModule } from './modules/curso/curso.module';
import { DepartamentoModule } from './modules/departamento/departamento.module';
import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { EvaluacionModule } from './modules/evaluacion/evaluacion.module';
import { MatriculaModule } from './modules/matricula/matricula.module';
import { NotasEvaluacionModule } from './modules/notas_evaluacion/notas_evaluacion.module';
import { ProfesorModule } from './modules/profesor/profesor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes environment variables accessible across the app
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to use ConfigService
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST', 'localhost'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        username: configService.get<string>('POSTGRES_USER', 'postgres'),
        password: configService.get<string>('POSTGRES_PASSWORD', ''), 
        database: configService.get<string>('POSTGRES_DB', 'academic_management'),
        autoLoadEntities: true,
        schema: "public",
        synchronize: true,
      }),
    }),

    DepartamentoModule,
    ProfesorModule,
    CursoModule,
    EstudianteModule,
    MatriculaModule,
    EvaluacionModule,
    NotasEvaluacionModule,
    AuthModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
