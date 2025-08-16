import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Susuarios } from './entities/susuarios.entity';
import { SusuariosService } from './services/susuarios.service';
import { SusuariosController } from './controllers/susuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Susuarios])],
  controllers: [SusuariosController],
  providers: [SusuariosService],
})
export class SusuariosModule {}
