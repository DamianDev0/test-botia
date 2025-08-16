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

  async createSysSubmenus(dto: CreateSysSubmenusDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSysSubmenus(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSysSubmenus(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSysSubmenus(id: string, dto: UpdateSysSubmenusDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
