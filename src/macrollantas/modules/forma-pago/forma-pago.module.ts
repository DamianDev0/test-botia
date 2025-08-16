import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormaPago } from './entities/forma-pago.entity';
import { FormaPagoService } from './services/forma-pago.service';
import { FormaPagoController } from './controllers/forma-pago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FormaPago])],
  controllers: [FormaPagoController],
  providers: [FormaPagoService],
})
export class FormaPagoModule {}
