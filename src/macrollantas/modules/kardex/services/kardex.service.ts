import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Kardex } from '../entities/kardex.entity';
import { CreateKardexDto } from '../dto/create-kardex.dto';
import { UpdateKardexDto } from '../dto/update-kardex.dto';

@Injectable()
export class KardexService extends BaseAuthenticatedService<Kardex> {
  private readonly entityName = 'kardex';

  constructor(
    @InjectRepository(Kardex)
    repository: Repository<Kardex>,
  ) {
    super(repository);
  }

  async createKardex(dto: CreateKardexDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllKardex(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneKardex(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateKardex(id: string, dto: UpdateKardexDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
