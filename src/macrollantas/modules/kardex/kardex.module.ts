import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kardex } from './entities/kardex.entity';
import { KardexService } from './services/kardex.service';
import { KardexController } from './controllers/kardex.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kardex])],
  controllers: [KardexController],
  providers: [KardexService],
})
export class KardexModule {}
