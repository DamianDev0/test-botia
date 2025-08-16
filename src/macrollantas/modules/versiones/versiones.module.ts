import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Versiones } from './entities/versiones.entity';
import { VersionesService } from './services/versiones.service';
import { VersionesController } from './controllers/versiones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Versiones])],
  controllers: [VersionesController],
  providers: [VersionesService],
})
export class VersionesModule {}
