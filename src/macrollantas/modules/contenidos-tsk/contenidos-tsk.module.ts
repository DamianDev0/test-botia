import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosTsk } from './entities/contenidos-tsk.entity';
import { ContenidosTskService } from './services/contenidos-tsk.service';
import { ContenidosTskController } from './controllers/contenidos-tsk.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosTsk])],
  controllers: [ContenidosTskController],
  providers: [ContenidosTskService],
})
export class ContenidosTskModule {}
