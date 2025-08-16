import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sucurrales } from './entities/sucurrales.entity';
import { SucurralesService } from './services/sucurrales.service';
import { SucurralesController } from './controllers/sucurrales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sucurrales])],
  controllers: [SucurralesController],
  providers: [SucurralesService],
})
export class SucurralesModule {}
