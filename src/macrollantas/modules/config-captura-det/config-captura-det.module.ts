import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCapturaDet } from './entities/config-captura-det.entity';
import { ConfigCapturaDetService } from './services/config-captura-det.service';
import { ConfigCapturaDetController } from './controllers/config-captura-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigCapturaDet])],
  controllers: [ConfigCapturaDetController],
  providers: [ConfigCapturaDetService],
})
export class ConfigCapturaDetModule {}
