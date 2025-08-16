import { Module } from '@nestjs/common';
import { ConceptosConController } from './controllers/conceptos-con.controller';
import { ConceptosConService } from './services/conceptos-con.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptosCon } from './entities/conceptos-co.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptosCon])],
  controllers: [ConceptosConController],
  providers: [ConceptosConService],
})
export class ConceptosConModule {}
