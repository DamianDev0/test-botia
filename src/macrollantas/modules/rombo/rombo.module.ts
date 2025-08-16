import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rombo } from './entities/rombo.entity';
import { RomboService } from './services/rombo.service';
import { RomboController } from './controllers/rombo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rombo])],
  controllers: [RomboController],
  providers: [RomboService],
})
export class RomboModule {}
