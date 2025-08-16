import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMatriculasCar } from './entities/tra-matriculas-car.entity';
import { TraMatriculasCarService } from './services/tra-matriculas-car.service';
import { TraMatriculasCarController } from './controllers/tra-matriculas-car.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMatriculasCar])],
  controllers: [TraMatriculasCarController],
  providers: [TraMatriculasCarService],
})
export class TraMatriculasCarModule {}
