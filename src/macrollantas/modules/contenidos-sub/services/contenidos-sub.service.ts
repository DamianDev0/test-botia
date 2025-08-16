import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosSub } from '../entities/contenidos-sub.entity';
import { CreateContenidosSubDto } from '../dto/create-contenidos-sub.dto';
import { UpdateContenidosSubDto } from '../dto/update-contenidos-sub.dto';

@Injectable()
export class ContenidosSubService extends BaseAuthenticatedService<ContenidosSub> {
  private readonly entityName = 'CONTENIDOS_SUB';

  constructor(
    @InjectRepository(ContenidosSub)
    repository: Repository<ContenidosSub>,
  ) {
    super(repository);
  }

  async createContenidosSub(dto: CreateContenidosSubDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllContenidosSub(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneContenidosSub(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateContenidosSub(id: string, dto: UpdateContenidosSubDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
