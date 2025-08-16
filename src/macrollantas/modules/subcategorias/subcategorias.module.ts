import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategorias } from './entities/subcategorias.entity';
import { SubcategoriasService } from './services/subcategorias.service';
import { SubcategoriasController } from './controllers/subcategorias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategorias])],
  controllers: [SubcategoriasController],
  providers: [SubcategoriasService],
})
export class SubcategoriasModule {}
