import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from './entities/pedidos.entity';
import { PedidosService } from './services/pedidos.service';
import { PedidosController } from './controllers/pedidos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pedidos])],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
