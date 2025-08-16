import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMarcas } from './entities/tra-marcas.entity';
import { TraMarcasService } from './services/tra-marcas.service';
import { TraMarcasController } from './controllers/tra-marcas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMarcas])],
  controllers: [TraMarcasController],
  providers: [TraMarcasService],
})
export class TraMarcasModule {}
