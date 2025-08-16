import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuestionarios } from './entities/cuestionarios.entity';
import { CuestionariosService } from './services/cuestionarios.service';
import { CuestionariosController } from './controllers/cuestionarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cuestionarios])],
  controllers: [CuestionariosController],
  providers: [CuestionariosService],
})
export class CuestionariosModule {}
