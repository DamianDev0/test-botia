import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotivosAnulacion } from './entities/motivos-anulacion.entity';
import { MotivosAnulacionService } from './services/motivos-anulacion.service';
import { MotivosAnulacionController } from './controllers/motivos-anulacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MotivosAnulacion])],
  controllers: [MotivosAnulacionController],
  providers: [MotivosAnulacionService],
})
export class MotivosAnulacionModule {}
