import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraCotizacionDet } from './entities/tra-cotizacion-det.entity';
import { TraCotizacionDetService } from './services/tra-cotizacion-det.service';
import { TraCotizacionDetController } from './controllers/tra-cotizacion-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraCotizacionDet])],
  controllers: [TraCotizacionDetController],
  providers: [TraCotizacionDetService],
})
export class TraCotizacionDetModule {}
