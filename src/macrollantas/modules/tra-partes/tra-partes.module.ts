import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraPartes } from './entities/tra-partes.entity';
import { TraPartesService } from './services/tra-partes.service';
import { TraPartesController } from './controllers/tra-partes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraPartes])],
  controllers: [TraPartesController],
  providers: [TraPartesService],
})
export class TraPartesModule {}
