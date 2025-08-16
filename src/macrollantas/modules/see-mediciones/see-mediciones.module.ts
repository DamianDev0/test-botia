import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeeMediciones } from './entities/see-mediciones.entity';
import { SeeMedicionesService } from './services/see-mediciones.service';
import { SeeMedicionesController } from './controllers/see-mediciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SeeMediciones])],
  controllers: [SeeMedicionesController],
  providers: [SeeMedicionesService],
})
export class SeeMedicionesModule {}
