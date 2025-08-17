import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Subcategorias } from '../entities/subcategorias.entity';
import { CreateSubcategoriasDto } from '../dto/create-subcategorias.dto';
import { UpdateSubcategoriasDto } from '../dto/update-subcategorias.dto';

@Injectable()
export class SubcategoriasService extends BaseAuthenticatedService<Subcategorias> {
  private readonly entityName = 'subcategorias';

  constructor(
    @InjectRepository(Subcategorias)
    repository: Repository<Subcategorias>,
  ) {
    super(repository);
  }

  async createSubcategorias(dto: CreateSubcategoriasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSubcategorias(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSubcategorias(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSubcategorias(id: string, dto: UpdateSubcategoriasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
