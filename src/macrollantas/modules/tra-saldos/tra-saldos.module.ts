import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraSaldos } from './entities/tra-saldos.entity';
import { TraSaldosService } from './services/tra-saldos.service';
import { TraSaldosController } from './controllers/tra-saldos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraSaldos])],
  controllers: [TraSaldosController],
  providers: [TraSaldosService],
})
export class TraSaldosModule {}
