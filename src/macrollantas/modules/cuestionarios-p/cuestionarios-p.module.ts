import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuestionariosP } from './entities/cuestionarios-p.entity';
import { CuestionariosPService } from './services/cuestionarios-p.service';
import { CuestionariosPController } from './controllers/cuestionarios-p.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuestionariosP])],
  controllers: [CuestionariosPController],
  providers: [CuestionariosPService],
})
export class CuestionariosPModule {}
