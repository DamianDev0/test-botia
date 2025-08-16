import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigVista } from './entities/config-vista.entity';
import { ConfigVistaService } from './services/config-vista.service';
import { ConfigVistaController } from './controllers/config-vista.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigVista])],
  controllers: [ConfigVistaController],
  providers: [ConfigVistaService],
})
export class ConfigVistaModule {}
