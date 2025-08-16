import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraSjustes } from './entities/tra-sjustes.entity';
import { TraSjustesService } from './services/tra-sjustes.service';
import { TraSjustesController } from './controllers/tra-sjustes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraSjustes])],
  controllers: [TraSjustesController],
  providers: [TraSjustesService],
})
export class TraSjustesModule {}
