import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosRec } from '../entities/contenidos-rec.entity';
import { CreateContenidosRecDto } from '../dto/create-contenidos-rec.dto';
import { UpdateContenidosRecDto } from '../dto/update-contenidos-rec.dto';

@Injectable()
export class ContenidosRecService extends BaseAuthenticatedService<ContenidosRec> {
  private readonly entityName = 'CONTENIDOS_REC';

  constructor(
    @InjectRepository(ContenidosRec)
    repository: Repository<ContenidosRec>,
  ) {
    super(repository);
  }

  async createContenidosRec(dto: CreateContenidosRecDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllContenidosRec(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneContenidosRec(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateContenidosRec(id: string, dto: UpdateContenidosRecDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
