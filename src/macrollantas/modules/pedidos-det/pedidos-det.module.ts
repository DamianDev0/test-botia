import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosDet } from './entities/pedidos-det.entity';
import { PedidosDetService } from './services/pedidos-det.service';
import { PedidosDetController } from './controllers/pedidos-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PedidosDet])],
  controllers: [PedidosDetController],
  providers: [PedidosDetService],
})
export class PedidosDetModule {}
