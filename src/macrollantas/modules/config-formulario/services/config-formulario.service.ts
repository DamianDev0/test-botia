import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigFormulario } from '../entities/config-formulario.entity';
import { CreateConfigFormularioDto } from '../dto/create-config-formulario.dto';
import { UpdateConfigFormularioDto } from '../dto/update-config-formulario.dto';

@Injectable()
export class ConfigFormularioService extends BaseAuthenticatedService<ConfigFormulario> {
  private readonly entityName = 'CONFIG_FORMULARIO';

  constructor(
    @InjectRepository(ConfigFormulario)
    repository: Repository<ConfigFormulario>,
  ) {
    super(repository);
  }

  async createConfigFormulario(dto: CreateConfigFormularioDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigFormulario(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigFormulario(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigFormulario(id: string, dto: UpdateConfigFormularioDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
