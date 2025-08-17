import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Empresas } from '../entities/empresas.entity';
import { CreateEmpresasDto } from '../dto/create-empresas.dto';
import { UpdateEmpresasDto } from '../dto/update-empresas.dto';

@Injectable()
export class EmpresasService extends BaseAuthenticatedService<Empresas> {
  private readonly entityName = 'empresas';

  constructor(
    @InjectRepository(Empresas)
    repository: Repository<Empresas>,
  ) {
    super(repository);
  }

  async createEmpresas(dto: CreateEmpresasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllEmpresas(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneEmpresas(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateEmpresas(id: string, dto: UpdateEmpresasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
