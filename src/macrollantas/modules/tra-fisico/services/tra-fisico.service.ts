import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraFisico } from '../entities/tra-fisico.entity';
import { CreateTraFisicoDto } from '../dto/create-tra-fisico.dto';
import { UpdateTraFisicoDto } from '../dto/update-tra-fisico.dto';

@Injectable()
export class TraFisicoService extends BaseAuthenticatedService<TraFisico> {
  private readonly entityName = 'tra_fisico';

  constructor(
    @InjectRepository(TraFisico)
    repository: Repository<TraFisico>,
  ) {
    super(repository);
  }

  async createTraFisico(dto: CreateTraFisicoDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraFisico(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraFisico(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraFisico(id: string, dto: UpdateTraFisicoDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
