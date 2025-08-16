import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosRec } from './entities/contenidos-rec.entity';
import { ContenidosRecService } from './services/contenidos-rec.service';
import { ContenidosRecController } from './controllers/contenidos-rec.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosRec])],
  controllers: [ContenidosRecController],
  providers: [ContenidosRecService],
})
export class ContenidosRecModule {}
