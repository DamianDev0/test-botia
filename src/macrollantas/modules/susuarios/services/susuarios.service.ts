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

  async createSusuarios(dto: CreateSusuariosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSusuarios(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSusuarios(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSusuarios(id: string, dto: UpdateSusuariosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
