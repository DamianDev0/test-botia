import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosCap } from './entities/contenidos-cap.entity';
import { ContenidosCapService } from './services/contenidos-cap.service';
import { ContenidosCapController } from './controllers/contenidos-cap.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosCap])],
  controllers: [ContenidosCapController],
  providers: [ContenidosCapService],
})
export class ContenidosCapModule {}
