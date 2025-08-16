import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigZonas } from './entities/config-zonas.entity';
import { ConfigZonasService } from './services/config-zonas.service';
import { ConfigZonasController } from './controllers/config-zonas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigZonas])],
  controllers: [ConfigZonasController],
  providers: [ConfigZonasService],
})
export class ConfigZonasModule {}
