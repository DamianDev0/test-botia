import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SysSubmenus } from '../entities/sys-submenus.entity';
import { CreateSysSubmenusDto } from '../dto/create-sys-submenus.dto';
import { UpdateSysSubmenusDto } from '../dto/update-sys-submenus.dto';

@Injectable()
export class SysSubmenusService extends BaseAuthenticatedService<SysSubmenus> {
  private readonly entityName = 'SYS_SUBMENUS';

  constructor(
    @InjectRepository(SysSubmenus)
    repository: Repository<SysSubmenus>,
  ) {
    super(repository);
  }

  async createSysSubmenus(dto: CreateSysSubmenusDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSysSubmenus(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSysSubmenus(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSysSubmenus(id: string, dto: UpdateSysSubmenusDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
