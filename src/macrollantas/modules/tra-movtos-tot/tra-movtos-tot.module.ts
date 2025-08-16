import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMovtosTot } from './entities/tra-movtos-tot.entity';
import { TraMovtosTotService } from './services/tra-movtos-tot.service';
import { TraMovtosTotController } from './controllers/tra-movtos-tot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMovtosTot])],
  controllers: [TraMovtosTotController],
  providers: [TraMovtosTotService],
})
export class TraMovtosTotModule {}
