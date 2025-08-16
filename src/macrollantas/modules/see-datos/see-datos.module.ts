import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeDatos } from './entities/see-datos.entity';
import { SeeDatosService } from './services/see-datos.service';
import { SeeDatosController } from './controllers/see-datos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeDatos])],
  controllers: [SeeDatosController],
  providers: [SeeDatosService],
})
export class SeeDatosModule {}
