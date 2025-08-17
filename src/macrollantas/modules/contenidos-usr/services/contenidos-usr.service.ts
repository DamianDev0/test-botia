import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ContenidosUsr } from '../entities/contenidos-usr.entity';
import { CreateContenidosUsrDto } from '../dto/create-contenidos-usr.dto';
import { UpdateContenidosUsrDto } from '../dto/update-contenidos-usr.dto';

@Injectable()
export class ContenidosUsrService extends BaseAuthenticatedService<ContenidosUsr> {
  private readonly entityName = 'CONTENIDOS_USR';

  constructor(
    @InjectRepository(ContenidosUsr)
    repository: Repository<ContenidosUsr>,
  ) {
    super(repository);
  }

  async createContenidosUsr(dto: CreateContenidosUsrDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllContenidosUsr(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneContenidosUsr(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateContenidosUsr(id: string, dto: UpdateContenidosUsrDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
