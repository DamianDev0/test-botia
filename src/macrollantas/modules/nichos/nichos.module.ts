import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nichos } from './entities/nichos.entity';
import { NichosService } from './services/nichos.service';
import { NichosController } from './controllers/nichos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Nichos])],
  controllers: [NichosController],
  providers: [NichosService],
})
export class NichosModule {}
