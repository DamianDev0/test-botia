import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temporadas } from './entities/temporadas.entity';
import { TemporadasService } from './services/temporadas.service';
import { TemporadasController } from './controllers/temporadas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Temporadas])],
  controllers: [TemporadasController],
  providers: [TemporadasService],
})
export class TemporadasModule {}
