import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Consecutivos } from '../entities/consecutivos.entity';
import { CreateConsecutivosDto } from '../dto/create-consecutivos.dto';
import { UpdateConsecutivosDto } from '../dto/update-consecutivos.dto';

@Injectable()
export class ConsecutivosService extends BaseAuthenticatedService<Consecutivos> {
  private readonly entityName = 'consecutivos';

  constructor(
    @InjectRepository(Consecutivos)
    repository: Repository<Consecutivos>,
  ) {
    super(repository);
  }

  async createConsecutivos(dto: CreateConsecutivosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConsecutivos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConsecutivos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConsecutivos(id: string, dto: UpdateConsecutivosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
