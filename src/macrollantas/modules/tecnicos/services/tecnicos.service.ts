import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Tecnicos } from '../entities/tecnicos.entity';
import { CreateTecnicosDto } from '../dto/create-tecnicos.dto';
import { UpdateTecnicosDto } from '../dto/update-tecnicos.dto';

@Injectable()
export class TecnicosService extends BaseAuthenticatedService<Tecnicos> {
  private readonly entityName = 'tecnicos';

  constructor(
    @InjectRepository(Tecnicos)
    repository: Repository<Tecnicos>,
  ) {
    super(repository);
  }

  async createTecnicos(dto: CreateTecnicosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTecnicos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTecnicos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTecnicos(id: string, dto: UpdateTecnicosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
