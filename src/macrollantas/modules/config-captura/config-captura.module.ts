import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCaptura } from './entities/config-captura.entity';
import { ConfigCapturaService } from './services/config-captura.service';
import { ConfigCapturaController } from './controllers/config-captura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigCaptura])],
  controllers: [ConfigCapturaController],
  providers: [ConfigCapturaService],
})
export class ConfigCapturaModule {}
