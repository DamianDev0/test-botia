import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigTargeta } from './entities/config-targeta.entity';
import { ConfigTargetaService } from './services/config-targeta.service';
import { ConfigTargetaController } from './controllers/config-targeta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigTargeta])],
  controllers: [ConfigTargetaController],
  providers: [ConfigTargetaService],
})
export class ConfigTargetaModule {}
