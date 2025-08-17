import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SysApps } from '../entities/sys-apps.entity';
import { CreateSysAppsDto } from '../dto/create-sys-apps.dto';
import { UpdateSysAppsDto } from '../dto/update-sys-apps.dto';

@Injectable()
export class SysAppsService extends BaseAuthenticatedService<SysApps> {
  private readonly entityName = 'SYS_APPS';

  constructor(
    @InjectRepository(SysApps)
    repository: Repository<SysApps>,
  ) {
    super(repository);
  }

  async createSysApps(dto: CreateSysAppsDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSysApps(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSysApps(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSysApps(id: string, dto: UpdateSysAppsDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
