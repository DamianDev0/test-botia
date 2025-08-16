import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuestionariosR } from './entities/cuestionarios-r.entity';
import { CuestionariosRService } from './services/cuestionarios-r.service';
import { CuestionariosRController } from './controllers/cuestionarios-r.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuestionariosR])],
  controllers: [CuestionariosRController],
  providers: [CuestionariosRService],
})
export class CuestionariosRModule {}
