import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraPlantillas } from './entities/tra-plantillas.entity';
import { TraPlantillasService } from './services/tra-plantillas.service';
import { TraPlantillasController } from './controllers/tra-plantillas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraPlantillas])],
  controllers: [TraPlantillasController],
  providers: [TraPlantillasService],
})
export class TraPlantillasModule {}
