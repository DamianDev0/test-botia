import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraCotizacionTot } from './entities/tra-cotizacion-tot.entity';
import { TraCotizacionTotService } from './services/tra-cotizacion-tot.service';
import { TraCotizacionTotController } from './controllers/tra-cotizacion-tot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraCotizacionTot])],
  controllers: [TraCotizacionTotController],
  providers: [TraCotizacionTotService],
})
export class TraCotizacionTotModule {}
