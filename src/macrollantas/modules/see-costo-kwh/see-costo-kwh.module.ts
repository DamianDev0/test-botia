import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeCostoKwh } from './entities/see-costo-kwh.entity';
import { SeeCostoKwhService } from './services/see-costo-kwh.service';
import { SeeCostoKwhController } from './controllers/see-costo-kwh.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeCostoKwh])],
  controllers: [SeeCostoKwhController],
  providers: [SeeCostoKwhService],
})
export class SeeCostoKwhModule {}
