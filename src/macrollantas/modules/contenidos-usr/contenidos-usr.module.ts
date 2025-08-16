import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosUsr } from './entities/contenidos-usr.entity';
import { ContenidosUsrService } from './services/contenidos-usr.service';
import { ContenidosUsrController } from './controllers/contenidos-usr.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidosUsr])],
  controllers: [ContenidosUsrController],
  providers: [ContenidosUsrService],
})
export class ContenidosUsrModule {}
