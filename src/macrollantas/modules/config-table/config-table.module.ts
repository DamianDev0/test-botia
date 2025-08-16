import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigTable } from './entities/config-table.entity';
import { ConfigTableService } from './services/config-table.service';
import { ConfigTableController } from './controllers/config-table.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigTable])],
  controllers: [ConfigTableController],
  providers: [ConfigTableService],
})
export class ConfigTableModule {}
