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

  async createConsecutivos(dto: CreateConsecutivosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConsecutivos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConsecutivos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConsecutivos(id: string, dto: UpdateConsecutivosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
