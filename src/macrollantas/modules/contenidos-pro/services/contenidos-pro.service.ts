import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosPro } from '../entities/contenidos-pro.entity';
import { CreateContenidosProDto } from '../dto/create-contenidos-pro.dto';
import { UpdateContenidosProDto } from '../dto/update-contenidos-pro.dto';

@Injectable()
export class ContenidosProService extends BaseAuthenticatedService<ContenidosPro> {
  private readonly entityName = 'CONTENIDOS_PRO';

  constructor(
    @InjectRepository(ContenidosPro)
    repository: Repository<ContenidosPro>,
  ) {
    super(repository);
  }

  async createContenidosPro(dto: CreateContenidosProDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllContenidosPro(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneContenidosPro(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateContenidosPro(id: string, dto: UpdateContenidosProDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
