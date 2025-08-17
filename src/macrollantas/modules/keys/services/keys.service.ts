import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Repository } from 'typeorm';
import { Claves } from '../entities/keys.entity';
import { CreateKeysDto } from '../dto/create-keys.dto';
import { UpdateKeysDto } from '../dto/update-keys.dto';

@Injectable()
export class KeysService extends BaseAuthenticatedService<Claves> {
  private readonly entityName = 'Claves';

  constructor(
    @InjectRepository(Claves)
    keysRepository: Repository<Claves>,
  ) {
    super(keysRepository);
  }

  async createKey(dto: CreateKeysDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllKeys(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneKey(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateKey(id: string, dto: UpdateKeysDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
