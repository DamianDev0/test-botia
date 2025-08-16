import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zonas } from './entities/zonas.entity';
import { ZonasService } from './services/zonas.service';
import { ZonasController } from './controllers/zonas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Zonas])],
  controllers: [ZonasController],
  providers: [ZonasService],
})
export class ZonasModule {}
