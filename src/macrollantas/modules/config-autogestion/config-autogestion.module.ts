import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigAutogestion } from './entities/config-autogestion.entity';
import { ConfigAutogestionController } from './controllers/config-autogestion.controller';
import { ConfigAutogestionService } from './services/config-autogestion.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigAutogestion])],
  controllers: [ConfigAutogestionController],
  providers: [ConfigAutogestionService],
})
export class ConfigAutogestionModule {}
