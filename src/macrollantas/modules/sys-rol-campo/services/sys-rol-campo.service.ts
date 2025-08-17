import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SysRolCampo } from '../entities/sys-rol-campo.entity';
import { CreateSysRolCampoDto } from '../dto/create-sys-rol-campo.dto';
import { UpdateSysRolCampoDto } from '../dto/update-sys-rol-campo.dto';

@Injectable()
export class SysRolCampoService extends BaseAuthenticatedService<SysRolCampo> {
  private readonly entityName = 'SYS_ROL_CAMPO';

  constructor(
    @InjectRepository(SysRolCampo)
    repository: Repository<SysRolCampo>,
  ) {
    super(repository);
  }

  async createSysRolCampo(dto: CreateSysRolCampoDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSysRolCampo(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSysRolCampo(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSysRolCampo(id: string, dto: UpdateSysRolCampoDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
