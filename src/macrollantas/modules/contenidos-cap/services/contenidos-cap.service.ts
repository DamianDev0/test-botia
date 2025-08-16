import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosCap } from '../entities/contenidos-cap.entity';
import { CreateContenidosCapDto } from '../dto/create-contenidos-cap.dto';
import { UpdateContenidosCapDto } from '../dto/update-contenidos-cap.dto';

@Injectable()
export class ContenidosCapService extends BaseAuthenticatedService<ContenidosCap> {
  private readonly entityName = 'CONTENIDOS_CAP';

  constructor(
    @InjectRepository(ContenidosCap)
    repository: Repository<ContenidosCap>,
  ) {
    super(repository);
  }

  async createContenidosCap(dto: CreateContenidosCapDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllContenidosCap(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneContenidosCap(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateContenidosCap(id: string, dto: UpdateContenidosCapDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
