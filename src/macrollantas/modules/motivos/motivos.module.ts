import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motivos } from './entities/motivos.entity';
import { MotivosService } from './services/motivos.service';
import { MotivosController } from './controllers/motivos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Motivos])],
  controllers: [MotivosController],
  providers: [MotivosService],
})
export class MotivosModule {}
