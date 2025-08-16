import { Module } from '@nestjs/common';
import { SysService } from './sys.service';
import { SysController } from './sys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SysApp, SysAppSchema } from './schema/sys-app.schema';
import { SysMenu, SysMenuSchema } from './schema/sys-menu.schema';
import { SysSubmenu, SysSubmenuSchema } from './schema/sys-submenu.schema';
import { SysRole, SysRoleSchema } from './schema/sys-role.schema';
import { AuthModule } from 'src/auth/auth.module';
import { Company, CompanySchema } from 'src/companies/schemas/company.schema';

@Module({
  controllers: [SysController],
  providers: [SysService],
  imports: [    
    MongooseModule.forFeature([
      { name: SysApp.name, schema: SysAppSchema },
      { name: SysMenu.name, schema: SysMenuSchema },
      { name: SysSubmenu.name, schema: SysSubmenuSchema },
      { name: SysRole.name, schema: SysRoleSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
    AuthModule
  ],
})
export class SysModule {}
