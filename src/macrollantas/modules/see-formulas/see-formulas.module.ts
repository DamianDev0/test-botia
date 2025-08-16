import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeFormulas } from './entities/see-formulas.entity';
import { SeeFormulasService } from './services/see-formulas.service';
import { SeeFormulasController } from './controllers/see-formulas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeFormulas])],
  controllers: [SeeFormulasController],
  providers: [SeeFormulasService],
})
export class SeeFormulasModule {}
