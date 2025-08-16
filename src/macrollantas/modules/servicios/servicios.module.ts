import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicios } from './entities/servicios.entity';
import { ServiciosService } from './services/servicios.service';
import { ServiciosController } from './controllers/servicios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Servicios])],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
