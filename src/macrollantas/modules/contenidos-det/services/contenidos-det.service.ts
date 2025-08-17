import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosDet } from '../entities/contenidos-det.entity';
import { CreateContenidosDetDto } from '../dto/create-contenidos-det.dto';
import { UpdateContenidosDetDto } from '../dto/update-contenidos-det.dto';

@Injectable()
export class ContenidosDetService extends BaseAuthenticatedService<ContenidosDet> {
  private readonly entityName = 'CONTENIDOS_DET';

  constructor(
    @InjectRepository(ContenidosDet)
    repository: Repository<ContenidosDet>,
  ) {
    super(repository);
  }

  async createContenidosDet(dto: CreateContenidosDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllContenidosDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneContenidosDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateContenidosDet(id: string, dto: UpdateContenidosDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
