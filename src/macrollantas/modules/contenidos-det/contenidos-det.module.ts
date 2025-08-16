import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosDet } from './entities/contenidos-det.entity';
import { ContenidosDetService } from './services/contenidos-det.service';
import { ContenidosDetController } from './controllers/contenidos-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosDet])],
  controllers: [ContenidosDetController],
  providers: [ContenidosDetService],
})
export class ContenidosDetModule {}
