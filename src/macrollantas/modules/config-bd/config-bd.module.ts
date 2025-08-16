import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigBd } from './entities/config-bd.entity';
import { ConfigBdService } from './services/config-bd.service';
import { ConfigBdController } from './controllers/config-bd.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigBd])],
  controllers: [ConfigBdController],
  providers: [ConfigBdService],
})
export class ConfigBdModule {}
