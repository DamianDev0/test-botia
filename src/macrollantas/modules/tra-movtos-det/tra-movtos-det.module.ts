import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMovtosDet } from './entities/tra-movtos-det.entity';
import { TraMovtosDetService } from './services/tra-movtos-det.service';
import { TraMovtosDetController } from './controllers/tra-movtos-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMovtosDet])],
  controllers: [TraMovtosDetController],
  providers: [TraMovtosDetService],
})
export class TraMovtosDetModule {}
