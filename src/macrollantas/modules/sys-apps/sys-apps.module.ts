import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysApps } from './entities/sys-apps.entity';
import { SysAppsService } from './services/sys-apps.service';
import { SysAppsController } from './controllers/sys-apps.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SysApps])],
  controllers: [SysAppsController],
  providers: [SysAppsService],
})
export class SysAppsModule {}
