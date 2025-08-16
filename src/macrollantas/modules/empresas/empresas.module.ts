import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresas } from './entities/empresas.entity';
import { EmpresasService } from './services/empresas.service';
import { EmpresasController } from './controllers/empresas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Empresas])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
})
export class EmpresasModule {}
