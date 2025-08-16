import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Tablas } from '../entities/tablas.entity';
import { CreateTablasDto } from '../dto/create-tablas.dto';
import { UpdateTablasDto } from '../dto/update-tablas.dto';

@Injectable()
export class TablasService extends BaseAuthenticatedService<Tablas> {
  private readonly entityName = 'TABLAS';

  constructor(
    @InjectRepository(Tablas)
    repository: Repository<Tablas>,
  ) {
    super(repository);
  }

  async createTablas(dto: CreateTablasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTablas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTablas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTablas(id: string, dto: UpdateTablasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
