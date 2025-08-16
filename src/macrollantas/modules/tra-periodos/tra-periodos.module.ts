import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraPeriodos } from './entities/tra-periodos.entity';
import { TraPeriodosService } from './services/tra-periodos.service';
import { TraPeriodosController } from './controllers/tra-periodos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraPeriodos])],
  controllers: [TraPeriodosController],
  providers: [TraPeriodosService],
})
export class TraPeriodosModule {}
