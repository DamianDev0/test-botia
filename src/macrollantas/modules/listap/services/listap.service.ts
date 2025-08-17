import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListAp } from '../entities/ListAp.entity';
import { BaseAuthenticatedService } from '../../../common/services/base-authenticated.service';

@Injectable()
export class ListApService extends BaseAuthenticatedService<ListAp> {
  private readonly entityName = 'ListAp';
  constructor(
    @InjectRepository(ListAp)
    protected readonly repository: Repository<ListAp>,
  ) {
    super(repository);
  }

  async createListAp(dto: ListAp, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllListAp(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneListAp(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateListAp(id: string, dto: ListAp, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
