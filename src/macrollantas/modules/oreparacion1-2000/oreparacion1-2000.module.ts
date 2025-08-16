import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oreparacion12000 } from './entities/oreparacion1-2000.entity';
import { Oreparacion12000Service } from './services/oreparacion1-2000.service';
import { Oreparacion12000Controller } from './controllers/oreparacion1-2000.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Oreparacion12000])],
  controllers: [Oreparacion12000Controller],
  providers: [Oreparacion12000Service],
})
export class Oreparacion12000Module {}
