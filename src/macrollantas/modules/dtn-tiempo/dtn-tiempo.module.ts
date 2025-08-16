import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DtnTiempo } from './entities/dtn-tiempo.entity';
import { DtnTiempoService } from './services/dtn-tiempo.service';
import { DtnTiempoController } from './controllers/dtn-tiempo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DtnTiempo])],
  controllers: [DtnTiempoController],
  providers: [DtnTiempoService],
})
export class DtnTiempoModule {}
