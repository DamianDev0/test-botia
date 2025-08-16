import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Nichos } from '../entities/nichos.entity';
import { CreateNichosDto } from '../dto/create-nichos.dto';
import { UpdateNichosDto } from '../dto/update-nichos.dto';

@Injectable()
export class NichosService extends BaseAuthenticatedService<Nichos> {
  private readonly entityName = 'NICHOS';

  constructor(
    @InjectRepository(Nichos)
    repository: Repository<Nichos>,
  ) {
    super(repository);
  }

  async createNichos(dto: CreateNichosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllNichos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneNichos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateNichos(id: string, dto: UpdateNichosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
