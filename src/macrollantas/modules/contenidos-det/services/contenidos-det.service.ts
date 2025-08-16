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

  async createContenidosDet(dto: CreateContenidosDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllContenidosDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneContenidosDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateContenidosDet(id: string, dto: UpdateContenidosDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
