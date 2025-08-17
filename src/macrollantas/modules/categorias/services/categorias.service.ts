import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Categorias } from '../entities/categorias.entity';
import { CreateCategoriasDto } from '../dto/create-categorias.dto';
import { UpdateCategoriasDto } from '../dto/update-categorias.dto';

@Injectable()
export class CategoriasService extends BaseAuthenticatedService<Categorias> {
  private readonly entityName = 'categorias';

  constructor(
    @InjectRepository(Categorias)
    repository: Repository<Categorias>,
  ) {
    super(repository);
  }

  async createCategorias(dto: CreateCategoriasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllCategorias(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneCategorias(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateCategorias(id: string, dto: UpdateCategoriasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
