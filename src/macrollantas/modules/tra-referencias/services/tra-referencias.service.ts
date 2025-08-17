import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraReferencias } from '../entities/tra-referencias.entity';
import { CreateTraReferenciasDto } from '../dto/create-tra-referencias.dto';
import { UpdateTraReferenciasDto } from '../dto/update-tra-referencias.dto';

@Injectable()
export class TraReferenciasService extends BaseAuthenticatedService<TraReferencias> {
  private readonly entityName = 'tra_referencias';

  constructor(
    @InjectRepository(TraReferencias)
    repository: Repository<TraReferencias>,
  ) {
    super(repository);
  }

  async createTraReferencias(dto: CreateTraReferenciasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraReferencias(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraReferencias(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraReferencias(id: string, dto: UpdateTraReferenciasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
