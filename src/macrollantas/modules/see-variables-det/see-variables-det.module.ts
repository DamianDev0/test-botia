import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeVariablesDet } from './entities/see-variables-det.entity';
import { SeeVariablesDetService } from './services/see-variables-det.service';
import { SeeVariablesDetController } from './controllers/see-variables-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeVariablesDet])],
  controllers: [SeeVariablesDetController],
  providers: [SeeVariablesDetService],
})
export class SeeVariablesDetModule {}
