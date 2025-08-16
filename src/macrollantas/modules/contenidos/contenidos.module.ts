import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contenidos } from './entities/contenidos.entity';
import { ContenidosService } from './services/contenidos.service';
import { ContenidosController } from './controllers/contenidos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contenidos])],
  controllers: [ContenidosController],
  providers: [ContenidosService],
})
export class ContenidosModule {}
