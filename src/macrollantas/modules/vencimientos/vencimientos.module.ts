import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vencimientos } from './entities/vencimientos.entity';
import { VencimientosService } from './services/vencimientos.service';
import { VencimientosController } from './controllers/vencimientos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vencimientos])],
  controllers: [VencimientosController],
  providers: [VencimientosService],
})
export class VencimientosModule {}
