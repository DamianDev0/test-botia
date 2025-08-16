import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraGruppos } from './entities/tra-gruppos.entity';
import { TraGrupposService } from './services/tra-gruppos.service';
import { TraGrupposController } from './controllers/tra-gruppos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraGruppos])],
  controllers: [TraGrupposController],
  providers: [TraGrupposService],
})
export class TraGrupposModule {}
