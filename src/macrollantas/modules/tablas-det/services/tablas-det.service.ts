import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TablasDet } from '../entities/tablas-det.entity';
import { CreateTablasDetDto } from '../dto/create-tablas-det.dto';
import { UpdateTablasDetDto } from '../dto/update-tablas-det.dto';

@Injectable()
export class TablasDetService extends BaseAuthenticatedService<TablasDet> {
  private readonly entityName = 'TABLAS_DET';

  constructor(
    @InjectRepository(TablasDet)
    repository: Repository<TablasDet>,
  ) {
    super(repository);
  }

  async createTablasDet(dto: CreateTablasDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTablasDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTablasDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTablasDet(id: string, dto: UpdateTablasDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
