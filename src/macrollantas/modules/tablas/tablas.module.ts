import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tablas } from './entities/tablas.entity';
import { TablasService } from './services/tablas.service';
import { TablasController } from './controllers/tablas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tablas])],
  controllers: [TablasController],
  providers: [TablasService],
})
export class TablasModule {}
