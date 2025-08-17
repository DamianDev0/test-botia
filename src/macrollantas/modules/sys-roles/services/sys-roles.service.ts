import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SysRoles } from '../entities/sys-roles.entity';
import { CreateSysRolesDto } from '../dto/create-sys-roles.dto';
import { UpdateSysRolesDto } from '../dto/update-sys-roles.dto';

@Injectable()
export class SysRolesService extends BaseAuthenticatedService<SysRoles> {
  private readonly entityName = 'SYS_ROLES';

  constructor(
    @InjectRepository(SysRoles)
    repository: Repository<SysRoles>,
  ) {
    super(repository);
  }

  async createSysRoles(dto: CreateSysRolesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSysRoles(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSysRoles(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSysRoles(id: string, dto: UpdateSysRolesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
