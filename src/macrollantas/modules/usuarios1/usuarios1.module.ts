import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios1 } from './entities/usuarios1.entity';
import { Usuarios1Service } from './services/usuarios1.service';
import { Usuarios1Controller } from './controllers/usuarios1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios1])],
  controllers: [Usuarios1Controller],
  providers: [Usuarios1Service],
})
export class Usuarios1Module {}
