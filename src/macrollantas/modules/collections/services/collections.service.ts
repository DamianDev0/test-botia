import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Repository } from 'typeorm';
import { COLECCIONES } from '../entities/collections.entity';
import { UpdateCollectionsDto } from '../dto/update-collections.dto';
import { CreateCollectionsDto } from '../dto/create-collections.dto';

@Injectable()
export class CollectionsService extends BaseAuthenticatedService<COLECCIONES> {
  private readonly entityName = 'COLECCIONES';

  constructor(
    @InjectRepository(COLECCIONES)
    collectionsRepository: Repository<COLECCIONES>,
  ) {
    super(collectionsRepository);
  }

  async createCollection(dto: CreateCollectionsDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllCollections(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneCollection(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateCollection(id: string, dto: UpdateCollectionsDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
