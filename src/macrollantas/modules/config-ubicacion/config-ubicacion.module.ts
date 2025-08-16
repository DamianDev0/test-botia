import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigUbicacion } from './entities/config-ubicacion.entity';
import { ConfigUbicacionService } from './services/config-ubicacion.service';
import { ConfigUbicacionController } from './controllers/config-ubicacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigUbicacion])],
  controllers: [ConfigUbicacionController],
  providers: [ConfigUbicacionService],
})
export class ConfigUbicacionModule {}
