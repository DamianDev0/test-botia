import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSysAppDto } from './dto/create-sys-app.dto';
import { CreateSysMenuDto } from './dto/create-sys-menu.dto';
import { CreateSysSubmenuDto } from './dto/create-sys-submenu.dto';
import { CreateSysRoleDto } from './dto/create-sys-role.dto';
import { SysApp } from './schema/sys-app.schema';
import { SysMenu } from './schema/sys-menu.schema';
import { SysSubmenu } from './schema/sys-submenu.schema';
import { SysRole } from './schema/sys-role.schema';
import { UpdateSysAppDto, UpdateSysRoleDto, UpdateSysMenuDto, UpdateSysSubmenuDto } from './dto/update-sy.dto';
import { Company } from 'src/companies/schemas/company.schema';

@Injectable()
export class SysService {
  constructor(
    @InjectModel(SysApp.name) private sysAppModel: Model<SysApp>,
    @InjectModel(SysMenu.name) private sysMenuModel: Model<SysMenu>,
    @InjectModel(SysSubmenu.name) private sysSubmenuModel: Model<SysSubmenu>,
    @InjectModel(SysRole.name) private sysRoleModel: Model<SysRole>,
    @InjectModel(Company.name) private companyModel: Model<Company>
  ) {}

  async createSysApp(dto: CreateSysAppDto) {
    try {
      const sysApp = new this.sysAppModel(dto);
      await sysApp.save();
      return {
        status: true,
        message: 'SysApp created successfully',
        data: sysApp
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async createSysRole(dto: CreateSysRoleDto) {
    try {
      const sysRole = new this.sysRoleModel(dto);
      await sysRole.save();
      return {
        status: true,
        message: 'SysRole created successfully',
        data: sysRole
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async createSysMenu(dto: CreateSysMenuDto) {
    try {
      const sysMenu = new this.sysMenuModel(dto);
      await sysMenu.save();
      return {
        status: true,
        message: 'SysMenu created successfully',
        data: sysMenu
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async createSysSubmenu(dto: CreateSysSubmenuDto) {
    try {
      const sysSubmenu = new this.sysSubmenuModel(dto);
      await sysSubmenu.save();
      return {
        status: true,
        message: 'SysSubmenu created successfully',
        data: sysSubmenu
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findAllSysApps(companyId: string, app: string) {
    try {
      const resCompany = await this.companyModel.findById(companyId);
      if (!resCompany) throw new NotFoundException('Company not found');
      const sysApps = app
        ? await this.sysAppModel.find({ companyId, app })
        : await this.sysAppModel.find({ companyId });
      return {
        status: true,
        message: 'SysApps fetched successfully',
        data: sysApps
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllSysRoles(companyId: string) {
    try {
      const resCompany = await this.companyModel.findById(companyId);
      if (!resCompany) throw new NotFoundException('Company not found');
      const sysRoles = await this.sysRoleModel.find({ companyId });
      return {
        status: true,
        message: 'SysRoles fetched successfully',
        data: sysRoles
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllSysMenus(companyId: string, app: string) {
    try {
      const resCompany = await this.companyModel.findById(companyId);
      if (!resCompany) throw new NotFoundException('Company not found');
      const sysMenus = app
        ? await this.sysMenuModel.find({ companyId, app })
        : await this.sysMenuModel.find({ companyId });
      return {
        status: true,
        message: 'SysMenus fetched successfully',
        data: sysMenus
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
 
  async findAllSysMenuByRole(companyId: string, role: string, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const resCompany = await this.companyModel.findById(companyId);
      if (!resCompany) throw new NotFoundException('Company not found');
      const sysMenu = await this.sysMenuModel
        .find({ role, companyId, app: 'WHATSAPP', status: true })
        .sort({ order: 1 });
      return {
        status: true,
        message: 'SysMenu fetched successfully',
        data: sysMenu,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllSysSubmenus(companyId: string, app: string) {
    try {
      const resCompany = await this.companyModel.findById(companyId);
      if (!resCompany) throw new NotFoundException('Company not found');
      const sysSubmenus = app
        ? await this.sysSubmenuModel.find({ companyId, app })
        : await this.sysSubmenuModel.find({ companyId });
      return {
        status: true,
        message: 'SysSubmenus fetched successfully',
        data: sysSubmenus
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllSysSubmenuByMenu(menuName: string, role: string, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const sysSubmenu = await this.sysSubmenuModel
        .find({ role, menu: menuName, app: 'WHATSAPP', status: true })
        .sort({ orderS: 1 });

      return {
        status: true,
        message: 'SysSubmenu fetched successfully',
        data: sysSubmenu,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOneSysApp(id: string) {
    try {
      const sysApp = await this.sysAppModel.findById(id);
      if (!sysApp) throw new NotFoundException('SysApp not found');
      return {
        status: true,
        message: 'SysApp fetched successfully',
        data: sysApp
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneSysRole(id: string) {
    try {
      const sysRole = await this.sysRoleModel.findById(id);
      if (!sysRole) throw new NotFoundException('SysRole not found');
      return {
        status: true,
        message: 'SysRole fetched successfully',
        data: sysRole
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneSysMenu(id: string) {
    try {
      const sysMenu = await this.sysMenuModel.findById(id);
      if (!sysMenu) throw new NotFoundException('SysMenu not found');
      return {
        status: true,
        message: 'SysMenu fetched successfully',
        data: sysMenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneSysSubmenu(id: string) {
    try {
      const sysSubmenu = await this.sysSubmenuModel.findById(id);
      if (!sysSubmenu) throw new NotFoundException('SysSubmenu not found');
      return {
        status: true,
        message: 'SysSubmenu fetched successfully',
        data: sysSubmenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysApp(id: string, dto: UpdateSysAppDto) {
    try {
      const updatedSysApp = await this.sysAppModel
        .findByIdAndUpdate(id, dto, { new: true });
      if (!updatedSysApp) throw new NotFoundException('SysApp not found');
      return {
        status: true,
        message: 'SysApp updated successfully',
        data: updatedSysApp
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysRole(id: string, dto: UpdateSysRoleDto) {
    try {
      const updatedSysRole = await this.sysRoleModel
        .findByIdAndUpdate(id, dto, { new: true });
      if (!updatedSysRole) throw new NotFoundException('SysRole not found');
      return {
        status: true,
        message: 'SysRole updated successfully',
        data: updatedSysRole
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysMenu(id: string, dto: UpdateSysMenuDto) {
    try {
      const updatedSysMenu = await this.sysMenuModel
        .findByIdAndUpdate(id, dto, { new: true });
      if (!updatedSysMenu) throw new NotFoundException('SysMenu not found');
      return {
        status: true,
        message: 'SysMenu updated successfully',
        data: updatedSysMenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysSubmenu(id: string, dto: UpdateSysSubmenuDto) {
    try {
      const updatedSysSubmenu = await this.sysSubmenuModel
        .findByIdAndUpdate(id, dto, { new: true });
      if (!updatedSysSubmenu) throw new NotFoundException('SysSubmenu not found');
      return {
        status: true,
        message: 'SysSubmenu updated successfully',
        data: updatedSysSubmenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysAppStatus(id: string, status: boolean) {
    try {
      const updatedSysApp = await this.sysAppModel
        .findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedSysApp) throw new NotFoundException('SysApp not found');
      return {
        status: true,
        message: 'SysApp status updated successfully',
        data: updatedSysApp
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysRoleStatus(id: string, status: boolean) {
    try {
      const updatedSysRole = await this.sysRoleModel
        .findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedSysRole) throw new NotFoundException('SysRole not found');
      return {
        status: true,
        message: 'SysRole status updated successfully',
        data: updatedSysRole
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysMenuStatus(id: string, status: boolean) {
    try {
      const updatedSysMenu = await this.sysMenuModel
        .findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedSysMenu) throw new NotFoundException('SysMenu not found');
      return {
        status: true,
        message: 'SysMenu status updated successfully',
        data: updatedSysMenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateSysSubmenuStatus(id: string, status: boolean) {
    try {
      const updatedSysSubmenu = await this.sysSubmenuModel
        .findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedSysSubmenu) throw new NotFoundException('SysSubmenu not found');
      return {
        status: true,
        message: 'SysSubmenu status updated successfully',
        data: updatedSysSubmenu
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
