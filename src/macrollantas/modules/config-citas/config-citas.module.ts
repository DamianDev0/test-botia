import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCitas } from './entities/config-citas.entity';
import { ConfigCitasService } from './services/config-citas.service';
import { ConfigCitasController } from './controllers/config-citas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigCitas])],
  controllers: [ConfigCitasController],
  providers: [ConfigCitasService],
})
export class ConfigCitasModule {}
