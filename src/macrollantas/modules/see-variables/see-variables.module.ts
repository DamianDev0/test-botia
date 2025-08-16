import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeVariables } from './entities/see-variables.entity';
import { SeeVariablesService } from './services/see-variables.service';
import { SeeVariablesController } from './controllers/see-variables.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeVariables])],
  controllers: [SeeVariablesController],
  providers: [SeeVariablesService],
})
export class SeeVariablesModule {}
