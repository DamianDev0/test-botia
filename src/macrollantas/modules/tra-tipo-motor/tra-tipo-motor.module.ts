import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraTipoMotor } from './entities/tra-tipo-motor.entity';
import { TraTipoMotorService } from './services/tra-tipo-motor.service';
import { TraTipoMotorController } from './controllers/tra-tipo-motor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraTipoMotor])],
  controllers: [TraTipoMotorController],
  providers: [TraTipoMotorService],
})
export class TraTipoMotorModule {}
