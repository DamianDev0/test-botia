import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mercado } from './entities/mercado.entity';
import { MercadoService } from './services/mercado.service';
import { MercadoController } from './controllers/mercado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mercado])],
  controllers: [MercadoController],
  providers: [MercadoService],
})
export class MercadoModule {}
