import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VersionesDet } from './entities/versiones-det.entity';
import { VersionesDetService } from './services/versiones-det.service';
import { VersionesDetController } from './controllers/versiones-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VersionesDet])],
  controllers: [VersionesDetController],
  providers: [VersionesDetService],
})
export class VersionesDetModule {}
