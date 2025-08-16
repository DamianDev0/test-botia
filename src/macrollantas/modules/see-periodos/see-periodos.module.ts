import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeePeriodos } from './entities/see-periodos.entity';
import { SeePeriodosService } from './services/see-periodos.service';
import { SeePeriodosController } from './controllers/see-periodos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeePeriodos])],
  controllers: [SeePeriodosController],
  providers: [SeePeriodosService],
})
export class SeePeriodosModule {}
