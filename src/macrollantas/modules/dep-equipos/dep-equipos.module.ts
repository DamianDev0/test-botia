import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepEquipos } from './entities/dep-equipos.entity';
import { DepEquiposService } from './services/dep-equipos.service';
import { DepEquiposController } from './controllers/dep-equipos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DepEquipos])],
  controllers: [DepEquiposController],
  providers: [DepEquiposService],
})
export class DepEquiposModule {}
