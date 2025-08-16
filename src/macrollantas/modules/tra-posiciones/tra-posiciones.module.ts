import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraPosiciones } from './entities/tra-posiciones.entity';
import { TraPosicionesService } from './services/tra-posiciones.service';
import { TraPosicionesController } from './controllers/tra-posiciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraPosiciones])],
  controllers: [TraPosicionesController],
  providers: [TraPosicionesService],
})
export class TraPosicionesModule {}
