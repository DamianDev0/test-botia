import { Controller, Get, Body, Patch, Param, Request, Query, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { UpdateStatusDto } from '../commons/dto/update-status.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @ApiOperation({ summary: 'Get user by uid' })
  @Get('id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.userService.findOne(id, req.user);
  }

  @ApiOperation({ summary: 'Get user by phone' })
  @Get('phone')
  findByPhone(
    @Headers('key') key: string,
    @Query('phone') phone: string
  ) {
    return this.userService.findByPhone(key, phone);
  }

  @Auth()
  @ApiOperation({ summary: 'Update user data' })
  @Patch()
  update(@Request() req: any, @Body() dto: UpdateUserDto) {
    return this.userService.update(req.user._id, dto);
  }

  @Auth(Roles.ROOT, Roles.SUPERADMIN)
  @ApiOperation({ summary: 'Update user status' })
  @Patch('status/:id')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.userService.updateStatus(id, dto.status);
  }

  @Auth(Roles.ROOT, Roles.SUPERADMIN)
  @ApiOperation({ summary: 'Update user role' })
  @Patch('role/:id')
  updateRole(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.userService.updateRole(id, dto.role);
  }

  @Auth()
  @ApiOperation({ summary: 'Update client role' })
  @ApiBody({ type: 'object', schema: {
    properties: { role: { type: 'string' }}}})
  @Patch('role/client/:id')
  updateRoleClient(@Param('id') id: string, @Body('role') role: string) {
    return this.userService.updateRoleClient(id, role);
  }
}
