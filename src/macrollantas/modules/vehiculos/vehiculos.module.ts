import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculos } from './entities/vehiculos.entity';
import { VehiculosService } from './services/vehiculos.service';
import { VehiculosController } from './controllers/vehiculos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculos])],
  controllers: [VehiculosController],
  providers: [VehiculosService],
})
export class VehiculosModule {}
