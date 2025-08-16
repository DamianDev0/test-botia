import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { COLECCIONES } from './entities/collections.entity';
import { CollectionsService } from './services/collections.service';
import { CollectionsController } from './controllers/collections.controller';

@Module({
  imports: [TypeOrmModule.forFeature([COLECCIONES])],
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionsModule {}
