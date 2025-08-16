import { Module } from '@nestjs/common';
import { PreciosController } from './controllers/precios.controller';
import { PreciosService } from './services/precios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Precios } from './entities/precios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Precios])],
  controllers: [PreciosController],
  providers: [PreciosService],
})
export class PreciosModule {}
