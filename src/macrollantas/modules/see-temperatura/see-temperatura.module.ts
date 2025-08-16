import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeTemperatura } from './entities/see-temperatura.entity';
import { SeeTemperaturaService } from './services/see-temperatura.service';
import { SeeTemperaturaController } from './controllers/see-temperatura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeTemperatura])],
  controllers: [SeeTemperaturaController],
  providers: [SeeTemperaturaService],
})
export class SeeTemperaturaModule {}
