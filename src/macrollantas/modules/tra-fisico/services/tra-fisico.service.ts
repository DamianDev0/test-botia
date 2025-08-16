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

  async createTraFisico(dto: CreateTraFisicoDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraFisico(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraFisico(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraFisico(id: string, dto: UpdateTraFisicoDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
