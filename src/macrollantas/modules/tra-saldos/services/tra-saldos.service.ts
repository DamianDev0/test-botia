import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraSaldos } from '../entities/tra-saldos.entity';
import { CreateTraSaldosDto } from '../dto/create-tra-saldos.dto';
import { UpdateTraSaldosDto } from '../dto/update-tra-saldos.dto';

@Injectable()
export class TraSaldosService extends BaseAuthenticatedService<TraSaldos> {
  private readonly entityName = 'tra_saldos';

  constructor(
    @InjectRepository(TraSaldos)
    repository: Repository<TraSaldos>,
  ) {
    super(repository);
  }

  async createTraSaldos(dto: CreateTraSaldosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraSaldos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraSaldos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraSaldos(id: string, dto: UpdateTraSaldosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
