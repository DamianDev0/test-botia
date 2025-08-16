import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosPro } from './entities/contenidos-pro.entity';
import { ContenidosProService } from './services/contenidos-pro.service';
import { ContenidosProController } from './controllers/contenidos-pro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosPro])],
  controllers: [ContenidosProController],
  providers: [ContenidosProService],
})
export class ContenidosProModule {}
