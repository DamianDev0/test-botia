import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysSubmenus } from './entities/sys-submenus.entity';
import { SysSubmenusService } from './services/sys-submenus.service';
import { SysSubmenusController } from './controllers/sys-submenus.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SysSubmenus])],
  controllers: [SysSubmenusController],
  providers: [SysSubmenusService],
})
export class SysSubmenusModule {}
