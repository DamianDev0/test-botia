import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigRel } from './entities/config-rel.entity';
import { ConfigRelService } from './services/config-rel.service';
import { ConfigRelController } from './controllers/config-rel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigRel])],
  controllers: [ConfigRelController],
  providers: [ConfigRelService],
})
export class ConfigRelModule {}
