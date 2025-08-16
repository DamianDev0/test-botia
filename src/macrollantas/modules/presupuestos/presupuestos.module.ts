import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presupuestos } from './entities/presupuestos.entity';
import { PresupuestosService } from './services/presupuestos.service';
import { PresupuestosController } from './controllers/presupuestos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Presupuestos])],
  controllers: [PresupuestosController],
  providers: [PresupuestosService],
})
export class PresupuestosModule {}
