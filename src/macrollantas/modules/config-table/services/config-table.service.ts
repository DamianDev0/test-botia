import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigTable } from '../entities/config-table.entity';
import { CreateConfigTableDto } from '../dto/create-config-table.dto';
import { UpdateConfigTableDto } from '../dto/update-config-table.dto';

@Injectable()
export class ConfigTableService extends BaseAuthenticatedService<ConfigTable> {
  private readonly entityName = 'CONFIG_TABLE';

  constructor(
    @InjectRepository(ConfigTable)
    repository: Repository<ConfigTable>,
  ) {
    super(repository);
  }

  async createConfigTable(dto: CreateConfigTableDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigTable(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigTable(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigTable(id: string, dto: UpdateConfigTableDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
