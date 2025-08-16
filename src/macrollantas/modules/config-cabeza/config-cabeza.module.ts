import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCabeza } from './entities/config-cabeza.entity';
import { ConfigCabezaService } from './services/config-cabeza.service';
import { ConfigCabezaController } from './controllers/config-cabeza.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigCabeza])],
  controllers: [ConfigCabezaController],
  providers: [ConfigCabezaService],
})
export class ConfigCabezaModule {}
