import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { DtnTiempo } from '../entities/dtn-tiempo.entity';
import { CreateDtnTiempoDto } from '../dto/create-dtn-tiempo.dto';
import { UpdateDtnTiempoDto } from '../dto/update-dtn-tiempo.dto';

@Injectable()
export class DtnTiempoService extends BaseAuthenticatedService<DtnTiempo> {
  private readonly entityName = 'DTN_TIEMPO';

  constructor(
    @InjectRepository(DtnTiempo)
    repository: Repository<DtnTiempo>,
  ) {
    super(repository);
  }

  async createDtnTiempo(dto: CreateDtnTiempoDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllDtnTiempo(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneDtnTiempo(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateDtnTiempo(id: string, dto: UpdateDtnTiempoDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
