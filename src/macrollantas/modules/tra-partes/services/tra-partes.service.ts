import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraPartes } from '../entities/tra-partes.entity';
import { CreateTraPartesDto } from '../dto/create-tra-partes.dto';
import { UpdateTraPartesDto } from '../dto/update-tra-partes.dto';

@Injectable()
export class TraPartesService extends BaseAuthenticatedService<TraPartes> {
  private readonly entityName = 'tra_partes';

  constructor(
    @InjectRepository(TraPartes)
    repository: Repository<TraPartes>,
  ) {
    super(repository);
  }

  async createTraPartes(dto: CreateTraPartesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraPartes(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraPartes(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraPartes(id: string, dto: UpdateTraPartesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
