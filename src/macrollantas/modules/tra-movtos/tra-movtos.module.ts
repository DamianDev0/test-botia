import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMovtos } from './entities/tra-movtos.entity';
import { TraMovtosService } from './services/tra-movtos.service';
import { TraMovtosController } from './controllers/tra-movtos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMovtos])],
  controllers: [TraMovtosController],
  providers: [TraMovtosService],
})
export class TraMovtosModule {}
