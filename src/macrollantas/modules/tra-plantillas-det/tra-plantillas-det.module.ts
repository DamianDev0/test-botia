import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraPlantillasDet } from './entities/tra-plantillas-det.entity';
import { TraPlantillasDetService } from './services/tra-plantillas-det.service';
import { TraPlantillasDetController } from './controllers/tra-plantillas-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraPlantillasDet])],
  controllers: [TraPlantillasDetController],
  providers: [TraPlantillasDetService],
})
export class TraPlantillasDetModule {}
