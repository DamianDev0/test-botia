import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraModelos } from './entities/tra-modelos.entity';
import { TraModelosService } from './services/tra-modelos.service';
import { TraModelosController } from './controllers/tra-modelos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraModelos])],
  controllers: [TraModelosController],
  providers: [TraModelosService],
})
export class TraModelosModule {}
