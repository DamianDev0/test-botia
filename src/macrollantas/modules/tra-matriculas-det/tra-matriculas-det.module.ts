import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMatriculasDet } from './entities/tra-matriculas-det.entity';
import { TraMatriculasDetService } from './services/tra-matriculas-det.service';
import { TraMatriculasDetController } from './controllers/tra-matriculas-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMatriculasDet])],
  controllers: [TraMatriculasDetController],
  providers: [TraMatriculasDetService],
})
export class TraMatriculasDetModule {}
