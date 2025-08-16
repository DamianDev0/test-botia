import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encuesta } from './entities/encuesta.entity';
import { EncuestaService } from './services/encuesta.service';
import { EncuestaController } from './controllers/encuesta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Encuesta])],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
