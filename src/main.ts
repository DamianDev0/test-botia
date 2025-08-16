import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { initializeApp } from 'firebase-admin/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1', { exclude: ['/'] });
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Auth Botia')
    .setDescription('Authentication microservice for Botia')
    .setVersion('7.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  // Credenciales de Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyCvviwRXlRkWqaT1dN1XomFQaEtP6830Sc',
    authDomain: 'botia-dev.firebaseapp.com',
    projectId: 'botia-dev',
    storageBucket: 'botia-dev.firebasestorage.app',
    messagingSenderId: '749406999035',
    appId: '1:749406999035:web:e8ea5aa0da2558560bbb5e',
  };
  initializeApp(firebaseConfig);

  await app.listen(process.env.PORT || 4001);
}
bootstrap();
