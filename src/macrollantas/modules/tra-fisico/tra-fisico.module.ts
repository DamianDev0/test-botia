import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraFisico } from './entities/tra-fisico.entity';
import { TraFisicoService } from './services/tra-fisico.service';
import { TraFisicoController } from './controllers/tra-fisico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraFisico])],
  controllers: [TraFisicoController],
  providers: [TraFisicoService],
})
export class TraFisicoModule {}
