import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraProcesosTiempos } from './entities/tra-procesos-tiempos.entity';
import { TraProcesosTiemposService } from './services/tra-procesos-tiempos.service';
import { TraProcesosTiemposController } from './controllers/tra-procesos-tiempos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraProcesosTiempos])],
  controllers: [TraProcesosTiemposController],
  providers: [TraProcesosTiemposService],
})
export class TraProcesosTiemposModule {}
