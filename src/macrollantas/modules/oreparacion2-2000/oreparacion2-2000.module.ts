import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oreparacion22000 } from './entities/oreparacion2-2000.entity';
import { Oreparacion22000Service } from './services/oreparacion2-2000.service';
import { Oreparacion22000Controller } from './controllers/oreparacion2-2000.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Oreparacion22000])],
  controllers: [Oreparacion22000Controller],
  providers: [Oreparacion22000Service],
})
export class Oreparacion22000Module {}
