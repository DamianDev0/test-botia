import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Susuarios } from '../entities/susuarios.entity';
import { CreateSusuariosDto } from '../dto/create-susuarios.dto';
import { UpdateSusuariosDto } from '../dto/update-susuarios.dto';

@Injectable()
export class SusuariosService extends BaseAuthenticatedService<Susuarios> {
  private readonly entityName = 'susuarios';

  constructor(
    @InjectRepository(Susuarios)
    repository: Repository<Susuarios>,
  ) {
    super(repository);
  }

  async createSusuarios(dto: CreateSusuariosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSusuarios(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSusuarios(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSusuarios(id: string, dto: UpdateSusuariosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
