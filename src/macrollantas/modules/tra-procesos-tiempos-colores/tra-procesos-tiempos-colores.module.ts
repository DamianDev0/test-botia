import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraProcesosTiemposColores } from './entities/tra-procesos-tiempos-colores.entity';
import { TraProcesosTiemposColoresService } from './services/tra-procesos-tiempos-colores.service';
import { TraProcesosTiemposColoresController } from './controllers/tra-procesos-tiempos-colores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraProcesosTiemposColores])],
  controllers: [TraProcesosTiemposColoresController],
  providers: [TraProcesosTiemposColoresService],
})
export class TraProcesosTiemposColoresModule {}
