import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraDetalles } from './entities/tra-detalles.entity';
import { TraDetallesService } from './services/tra-detalles.service';
import { TraDetallesController } from './controllers/tra-detalles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraDetalles])],
  controllers: [TraDetallesController],
  providers: [TraDetallesService],
})
export class TraDetallesModule {}
