import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigVista } from '../entities/config-vista.entity';
import { CreateConfigVistaDto } from '../dto/create-config-vista.dto';
import { UpdateConfigVistaDto } from '../dto/update-config-vista.dto';

@Injectable()
export class ConfigVistaService extends BaseAuthenticatedService<ConfigVista> {
  private readonly entityName = 'CONFIG_VISTA';

  constructor(
    @InjectRepository(ConfigVista)
    repository: Repository<ConfigVista>,
  ) {
    super(repository);
  }

  async createConfigVista(dto: CreateConfigVistaDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigVista(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigVista(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigVista(id: string, dto: UpdateConfigVistaDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
