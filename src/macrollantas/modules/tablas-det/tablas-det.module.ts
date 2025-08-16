import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablasDet } from './entities/tablas-det.entity';
import { TablasDetService } from './services/tablas-det.service';
import { TablasDetController } from './controllers/tablas-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TablasDet])],
  controllers: [TablasDetController],
  providers: [TablasDetService],
})
export class TablasDetModule {}
