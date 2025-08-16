import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraCotizacion } from './entities/tra-cotizacion.entity';
import { TraCotizacionService } from './services/tra-cotizacion.service';
import { TraCotizacionController } from './controllers/tra-cotizacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraCotizacion])],
  controllers: [TraCotizacionController],
  providers: [TraCotizacionService],
})
export class TraCotizacionModule {}
