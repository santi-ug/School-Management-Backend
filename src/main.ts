import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // Permite solicitudes solo desde el frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite enviar cookies o cabeceras de autorización
  });

  await app.listen(3000);
}
bootstrap();
