import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preguntas } from './entities/preguntas.entity';
import { PreguntasService } from './services/preguntas.service';
import { PreguntasController } from './controllers/preguntas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Preguntas])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
