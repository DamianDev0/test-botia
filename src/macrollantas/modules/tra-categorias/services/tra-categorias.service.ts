import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraCategorias } from '../entities/tra-categorias.entity';
import { CreateTraCategoriasDto } from '../dto/create-tra-categorias.dto';
import { UpdateTraCategoriasDto } from '../dto/update-tra-categorias.dto';

@Injectable()
export class TraCategoriasService extends BaseAuthenticatedService<TraCategorias> {
  private readonly entityName = 'tra_categorias';

  constructor(
    @InjectRepository(TraCategorias)
    repository: Repository<TraCategorias>,
  ) {
    super(repository);
  }

  async createTraCategorias(dto: CreateTraCategoriasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraCategorias(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraCategorias(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraCategorias(id: string, dto: UpdateTraCategoriasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
