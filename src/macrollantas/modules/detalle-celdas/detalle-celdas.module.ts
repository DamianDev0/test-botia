import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleCeldas } from './entities/detalle-celdas.entity';
import { DetalleCeldasService } from './services/detalle-celdas.service';
import { DetalleCeldasController } from './controllers/detalle-celdas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleCeldas])],
  controllers: [DetalleCeldasController],
  providers: [DetalleCeldasService],
})
export class DetalleCeldasModule {}
