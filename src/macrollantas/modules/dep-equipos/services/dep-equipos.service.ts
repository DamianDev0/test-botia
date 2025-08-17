import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { DepEquipos } from '../entities/dep-equipos.entity';
import { CreateDepEquiposDto } from '../dto/create-dep-equipos.dto';
import { UpdateDepEquiposDto } from '../dto/update-dep-equipos.dto';

@Injectable()
export class DepEquiposService extends BaseAuthenticatedService<DepEquipos> {
  private readonly entityName = 'DEP_EQUIPOS';

  constructor(
    @InjectRepository(DepEquipos)
    repository: Repository<DepEquipos>,
  ) {
    super(repository);
  }

  async createDepEquipos(dto: CreateDepEquiposDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllDepEquipos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneDepEquipos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateDepEquipos(id: string, dto: UpdateDepEquiposDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
