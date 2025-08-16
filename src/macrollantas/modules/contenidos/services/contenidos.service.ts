import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Contenidos } from '../entities/contenidos.entity';
import { CreateContenidosDto } from '../dto/create-contenidos.dto';
import { UpdateContenidosDto } from '../dto/update-contenidos.dto';

@Injectable()
export class ContenidosService extends BaseAuthenticatedService<Contenidos> {
  private readonly entityName = 'CONTENIDOS';

  constructor(
    @InjectRepository(Contenidos)
    repository: Repository<Contenidos>,
  ) {
    super(repository);
  }

  async createContenidos(dto: CreateContenidosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllContenidos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneContenidos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateContenidos(id: string, dto: UpdateContenidosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
