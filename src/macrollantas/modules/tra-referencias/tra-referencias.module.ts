import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraReferencias } from './entities/tra-referencias.entity';
import { TraReferenciasService } from './services/tra-referencias.service';
import { TraReferenciasController } from './controllers/tra-referencias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraReferencias])],
  controllers: [TraReferenciasController],
  providers: [TraReferenciasService],
})
export class TraReferenciasModule {}
