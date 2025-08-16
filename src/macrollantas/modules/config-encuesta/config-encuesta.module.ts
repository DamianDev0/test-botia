import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigEncuesta } from './entities/config-encuesta.entity';
import { ConfigEncuestaService } from './services/config-encuesta.service';
import { ConfigEncuestaController } from './controllers/config-encuesta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigEncuesta])],
  controllers: [ConfigEncuestaController],
  providers: [ConfigEncuestaService],
})
export class ConfigEncuestaModule {}
