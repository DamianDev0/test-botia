import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Claves } from './entities/keys.entity';
import { KeysService } from './services/keys.service';
import { KeysController } from './controllers/keys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Claves])],
  controllers: [KeysController],
  providers: [KeysService],
})
export class KeysModule {}
