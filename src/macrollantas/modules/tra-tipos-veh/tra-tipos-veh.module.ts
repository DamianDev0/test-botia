import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraTiposVeh } from './entities/tra-tipos-veh.entity';
import { TraTiposVehService } from './services/tra-tipos-veh.service';
import { TraTiposVehController } from './controllers/tra-tipos-veh.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraTiposVeh])],
  controllers: [TraTiposVehController],
  providers: [TraTiposVehService],
})
export class TraTiposVehModule {}
