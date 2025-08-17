import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraSjustes } from '../entities/tra-sjustes.entity';
import { CreateTraSjustesDto } from '../dto/create-tra-sjustes.dto';
import { UpdateTraSjustesDto } from '../dto/update-tra-sjustes.dto';

@Injectable()
export class TraSjustesService extends BaseAuthenticatedService<TraSjustes> {
  private readonly entityName = 'tra_sjustes';

  constructor(
    @InjectRepository(TraSjustes)
    repository: Repository<TraSjustes>,
  ) {
    super(repository);
  }

  async createTraSjustes(dto: CreateTraSjustesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraSjustes(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraSjustes(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraSjustes(id: string, dto: UpdateTraSjustesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
