import { Controller, Get, Post, Body, Patch, Param, Query, Headers } from '@nestjs/common';
import { SysService } from './sys.service';
import { CreateSysAppDto } from './dto/create-sys-app.dto';
import { CreateSysMenuDto } from './dto/create-sys-menu.dto';
import { CreateSysSubmenuDto } from './dto/create-sys-submenu.dto';
import { CreateSysRoleDto } from './dto/create-sys-role.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UpdateSysAppDto, UpdateSysMenuDto, UpdateSysRoleDto, UpdateSysSubmenuDto } from './dto/update-sy.dto';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';

@Controller('sys')
export class SysController {
  constructor(private readonly sysService: SysService) {}

  @Auth()
  @ApiOperation({ summary: 'Create a new system app' })
  @Post('app')
  createApp(@Body() createSysAppDto: CreateSysAppDto) {
    return this.sysService.createSysApp(createSysAppDto);
  }

  @Auth()
  @ApiOperation({ summary: 'Create a new system role' })
  @Post('role')
  createRole(@Body() createSysRoleDto: CreateSysRoleDto) {
    return this.sysService.createSysRole(createSysRoleDto);
  }

  @Auth()
  @ApiOperation({ summary: 'Create a new system menu' })
  @Post('menu')
  createMenu(@Body() createSysMenuDto: CreateSysMenuDto) {
    return this.sysService.createSysMenu(createSysMenuDto);
  }

  @Auth()
  @ApiOperation({ summary: 'Create a new system submenu' })
  @Post('submenu')
  createSubmenu(@Body() createSysSubmenuDto: CreateSysSubmenuDto) {
    return this.sysService.createSysSubmenu(createSysSubmenuDto);
  }

  @Auth()
  @ApiOperation({ summary: 'Get all system apps' })
  @ApiQuery({ name: 'app', required: false })
  @Get('apps')
  getSysApps(
    @Query('companyId') companyId: string,
    @Query('app') app: string
  ) {
    return this.sysService.findAllSysApps(companyId, app);
  }

  @Auth()
  @ApiOperation({ summary: 'Get all system roles' })
  @Get('roles')
  getSysRoles(@Query('companyId') companyId: string) {
    return this.sysService.findAllSysRoles(companyId);
  }

  @Auth()
  @ApiOperation({ summary: 'Get all system menus' })
  @ApiQuery({ name: 'app', required: false })
  @Get('menus')
  getSysMenus(
    @Query('companyId') companyId: string,
    @Query('app') app: string
  ) {
    return this.sysService.findAllSysMenus(companyId, app);
  }

  @Auth()
  @ApiOperation({ summary: 'Get all system submenus' })
  @ApiQuery({ name: 'app', required: false })
  @Get('submenus')
  getSysSubmenus(
    @Query('companyId') companyId: string,
    @Query('app') app: string
  ) {
    return this.sysService.findAllSysSubmenus(companyId, app);
  }

  @ApiOperation({ summary: 'Get all system menus by role' })
  @Get('menus/role')
  getSysMenusByRole(
    @Query('companyId') companyId: string,
    @Query('role') role: string,
    @Headers('key') key: string,
  ) {
    return this.sysService.findAllSysMenuByRole(companyId, role, key);
  }

  @ApiOperation({ summary: 'Get all system submenus by menu' })
  @Get('submenus/menu')
  getSysSubmenusByMenu(
    @Query('menuName') menuName: string,
    @Query('role') role: string,
    @Headers('key') key: string
  ) {
    return this.sysService.findAllSysSubmenuByMenu(menuName, role, key);
  }

  @Auth()
  @ApiOperation({ summary: 'Get a system app by id' })
  @Get('app/:id')
  getSysApp(@Param('id') id: string) {
    return this.sysService.findOneSysApp(id);
  }

  @Auth()
  @ApiOperation({ summary: 'Get a system role by id' })
  @Get('role/:id')
  getSysRole(@Param('id') id: string) {
    return this.sysService.findOneSysRole(id);
  }

  @Auth()
  @ApiOperation({ summary: 'Get a system menu by id' })
  @Get('menu/:id')
  getSysMenu(@Param('id') id: string) {
    return this.sysService.findOneSysMenu(id);
  }

  @Auth()
  @ApiOperation({ summary: 'Get a system submenu by id' })
  @Get('submenu/:id')
  getSysSubmenu(@Param('id') id: string) {
    return this.sysService.findOneSysSubmenu(id);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system app' })
  @Patch('app/:id')
  updateSysApp(
    @Param('id') id: string,
    @Body() dto: UpdateSysAppDto
  ) {
    return this.sysService.updateSysApp(id, dto);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system role' })
  @Patch('role/:id')
  updateSysRole(
    @Param('id') id: string,
    @Body() dto: UpdateSysRoleDto
  ) {
    return this.sysService.updateSysRole(id, dto);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system menu' })
  @Patch('menu/:id')
  updateSysMenu(
    @Param('id') id: string,
    @Body() dto: UpdateSysMenuDto
  ) {
    return this.sysService.updateSysMenu(id, dto);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system submenu' })
  @Patch('submenu/:id')
  updateSysSubmenu(
    @Param('id') id: string,
    @Body() dto: UpdateSysSubmenuDto
  ) {
    return this.sysService.updateSysSubmenu(id, dto);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system app status' })
  @Patch('app/:id/status')
  updateSysAppStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.sysService.updateSysAppStatus(id, dto.status);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system role status' })
  @Patch('role/:id/status')
  updateSysRoleStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.sysService.updateSysRoleStatus(id, dto.status);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system menu status' })
  @Patch('menu/:id/status')
  updateSysMenuStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.sysService.updateSysMenuStatus(id, dto.status);
  }

  @Auth()
  @ApiOperation({ summary: 'Update a system submenu status' })
  @Patch('submenu/:id/status')
  updateSysSubmenuStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.sysService.updateSysSubmenuStatus(id, dto.status);
  }
}
