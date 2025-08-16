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

  async createTraSaldos(dto: CreateTraSaldosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraSaldos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraSaldos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraSaldos(id: string, dto: UpdateTraSaldosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
