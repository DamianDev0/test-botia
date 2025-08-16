import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosSub } from './entities/contenidos-sub.entity';
import { ContenidosSubService } from './services/contenidos-sub.service';
import { ContenidosSubController } from './controllers/contenidos-sub.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosSub])],
  controllers: [ContenidosSubController],
  providers: [ContenidosSubService],
})
export class ContenidosSubModule {}
