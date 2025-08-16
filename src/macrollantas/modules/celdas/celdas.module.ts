import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celdas } from './entities/celdas.entity';
import { CeldasService } from './services/celdas.service';
import { CeldasController } from './controllers/celdas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Celdas])],
  controllers: [CeldasController],
  providers: [CeldasService],
})
export class CeldasModule {}
