import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraMatriculas } from './entities/tra-matriculas.entity';
import { TraMatriculasService } from './services/tra-matriculas.service';
import { TraMatriculasController } from './controllers/tra-matriculas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraMatriculas])],
  controllers: [TraMatriculasController],
  providers: [TraMatriculasService],
})
export class TraMatriculasModule {}
