import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeMediciones } from '../entities/see-mediciones.entity';
import { CreateSeeMedicionesDto } from '../dto/create-see-mediciones.dto';
import { UpdateSeeMedicionesDto } from '../dto/update-see-mediciones.dto';

@Injectable()
export class SeeMedicionesService extends BaseAuthenticatedService<SeeMediciones> {
  private readonly entityName = 'see_mediciones';

  constructor(
    @InjectRepository(SeeMediciones)
    repository: Repository<SeeMediciones>,
  ) {
    super(repository);
  }

  async createSeeMediciones(dto: CreateSeeMedicionesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeeMediciones(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeeMediciones(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeeMediciones(id: string, dto: UpdateSeeMedicionesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
