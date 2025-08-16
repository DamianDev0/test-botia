import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigQr } from './entities/config-qr.entity';
import { ConfigQrService } from './services/config-qr.service';
import { ConfigQrController } from './controllers/config-qr.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigQr])],
  controllers: [ConfigQrController],
  providers: [ConfigQrService],
})
export class ConfigQrModule {}
