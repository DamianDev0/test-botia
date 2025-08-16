import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './entities/clientes.entity';
import { ClientesService } from './services/clientes.service';
import { ClientesController } from './controllers/clientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
