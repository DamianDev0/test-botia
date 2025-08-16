import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigQrDet } from './entities/config-qr-det.entity';
import { ConfigQrDetService } from './services/config-qr-det.service';
import { ConfigQrDetController } from './controllers/config-qr-det.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigQrDet])],
  controllers: [ConfigQrDetController],
  providers: [ConfigQrDetService],
})
export class ConfigQrDetModule {}
