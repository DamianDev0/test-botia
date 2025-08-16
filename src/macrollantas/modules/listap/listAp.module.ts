import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListAp } from './entities/listap.entity';
import { ListapController } from './controllers/listap.controller';
import { ListApService } from './services/listap.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListAp])],
  controllers: [ListapController],
  providers: [ListApService],
})
export class ListApModule {}
