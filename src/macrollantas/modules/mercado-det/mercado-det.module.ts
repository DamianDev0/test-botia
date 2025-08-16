import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MercadoDet } from './entities/mercado-det.entity';
import { MercadoDetService } from './services/mercado-det.service';
import { MercadoDetController } from './controllers/mercado-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MercadoDet])],
  controllers: [MercadoDetController],
  providers: [MercadoDetService],
})
export class MercadoDetModule {}
