import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosImportados } from './entities/datos-importados.entity';
import { DatosImportadosService } from './services/datos-importados.service';
import { DatosImportadosController } from './controllers/datos-importados.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DatosImportados])],
  controllers: [DatosImportadosController],
  providers: [DatosImportadosService],
})
export class DatosImportadosModule {}
