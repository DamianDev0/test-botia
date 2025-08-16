import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conceptos } from './entities/conceptos.entity';
import { ConceptosService } from './services/conceptos.service';
import { ConceptosController } from './controllers/conceptos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Conceptos])],
  controllers: [ConceptosController],
  providers: [ConceptosService],
})
export class ConceptosModule {}
