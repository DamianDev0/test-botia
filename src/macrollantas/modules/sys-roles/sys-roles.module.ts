import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysRoles } from './entities/sys-roles.entity';
import { SysRolesService } from './services/sys-roles.service';
import { SysRolesController } from './controllers/sys-roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SysRoles])],
  controllers: [SysRolesController],
  providers: [SysRolesService],
})
export class SysRolesModule {}
