import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposUsuarios } from './entities/grupos-usuarios.entity';
import { GruposUsuariosService } from './services/grupos-usuarios.service';
import { GruposUsuariosController } from './controllers/grupos-usuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GruposUsuarios])],
  controllers: [GruposUsuariosController],
  providers: [GruposUsuariosService],
})
export class GruposUsuariosModule {}
