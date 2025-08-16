import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigKardex } from './entities/config-kardex.entity';
import { ConfigKardexService } from './services/config-kardex.service';
import { ConfigKardexController } from './controllers/config-kardex.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigKardex])],
  controllers: [ConfigKardexController],
  providers: [ConfigKardexService],
})
export class ConfigKardexModule {}
