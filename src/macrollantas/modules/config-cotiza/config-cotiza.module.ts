import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCotiza } from './entities/config-cotiza.entity';
import { ConfigCotizaService } from './services/config-cotiza.service';
import { ConfigCotizaController } from './controllers/config-cotiza.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigCotiza])],
  controllers: [ConfigCotizaController],
  providers: [ConfigCotizaService],
})
export class ConfigCotizaModule {}
