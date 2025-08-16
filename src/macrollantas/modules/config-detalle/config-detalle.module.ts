import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDetalle } from './entities/config-detalle.entity';
import { ConfigDetalleService } from './services/config-detalle.service';
import { ConfigDetalleController } from './controllers/config-detalle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigDetalle])],
  controllers: [ConfigDetalleController],
  providers: [ConfigDetalleService],
})
export class ConfigDetalleModule {}
