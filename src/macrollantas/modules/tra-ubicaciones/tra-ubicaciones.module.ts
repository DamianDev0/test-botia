import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraUbicaciones } from './entities/tra-ubicaciones.entity';
import { TraUbicacionesService } from './services/tra-ubicaciones.service';
import { TraUbicacionesController } from './controllers/tra-ubicaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraUbicaciones])],
  controllers: [TraUbicacionesController],
  providers: [TraUbicacionesService],
})
export class TraUbicacionesModule {}
