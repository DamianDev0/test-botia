import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraProcesos } from './entities/tra-procesos.entity';
import { TraProcesosService } from './services/tra-procesos.service';
import { TraProcesosController } from './controllers/tra-procesos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraProcesos])],
  controllers: [TraProcesosController],
  providers: [TraProcesosService],
})
export class TraProcesosModule {}
