import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consecutivos } from './entities/consecutivos.entity';
import { ConsecutivosService } from './services/consecutivos.service';
import { ConsecutivosController } from './controllers/consecutivos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Consecutivos])],
  controllers: [ConsecutivosController],
  providers: [ConsecutivosService],
})
export class ConsecutivosModule {}
