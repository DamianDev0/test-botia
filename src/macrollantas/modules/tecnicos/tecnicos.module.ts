import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnicos } from './entities/tecnicos.entity';
import { TecnicosService } from './services/tecnicos.service';
import { TecnicosController } from './controllers/tecnicos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tecnicos])],
  controllers: [TecnicosController],
  providers: [TecnicosService],
})
export class TecnicosModule {}
