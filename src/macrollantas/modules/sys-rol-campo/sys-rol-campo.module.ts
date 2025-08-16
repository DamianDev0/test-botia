import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysRolCampo } from './entities/sys-rol-campo.entity';
import { SysRolCampoService } from './services/sys-rol-campo.service';
import { SysRolCampoController } from './controllers/sys-rol-campo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SysRolCampo])],
  controllers: [SysRolCampoController],
  providers: [SysRolCampoService],
})
export class SysRolCampoModule {}
