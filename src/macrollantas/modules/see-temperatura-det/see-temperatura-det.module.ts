import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeTemperaturaDet } from './entities/see-temperatura-det.entity';
import { SeeTemperaturaDetService } from './services/see-temperatura-det.service';
import { SeeTemperaturaDetController } from './controllers/see-temperatura-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeTemperaturaDet])],
  controllers: [SeeTemperaturaDetController],
  providers: [SeeTemperaturaDetService],
})
export class SeeTemperaturaDetModule {}
