import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraCategorias } from './entities/tra-categorias.entity';
import { TraCategoriasService } from './services/tra-categorias.service';
import { TraCategoriasController } from './controllers/tra-categorias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraCategorias])],
  controllers: [TraCategoriasController],
  providers: [TraCategoriasService],
})
export class TraCategoriasModule {}
