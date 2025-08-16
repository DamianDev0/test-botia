import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosTsk } from '../entities/contenidos-tsk.entity';
import { CreateContenidosTskDto } from '../dto/create-contenidos-tsk.dto';
import { UpdateContenidosTskDto } from '../dto/update-contenidos-tsk.dto';

@Injectable()
export class ContenidosTskService extends BaseAuthenticatedService<ContenidosTsk> {
  private readonly entityName = 'CONTENIDOS_TSK';

  constructor(
    @InjectRepository(ContenidosTsk)
    repository: Repository<ContenidosTsk>,
  ) {
    super(repository);
  }

  async createContenidosTsk(dto: CreateContenidosTskDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllContenidosTsk(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneContenidosTsk(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateContenidosTsk(id: string, dto: UpdateContenidosTskDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
