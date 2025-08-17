import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Versiones } from '../entities/versiones.entity';
import { CreateVersionesDto } from '../dto/create-versiones.dto';
import { UpdateVersionesDto } from '../dto/update-versiones.dto';

@Injectable()
export class VersionesService extends BaseAuthenticatedService<Versiones> {
  private readonly entityName = 'VERSIONES';

  constructor(
    @InjectRepository(Versiones)
    repository: Repository<Versiones>,
  ) {
    super(repository);
  }

  async createVersiones(dto: CreateVersionesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllVersiones(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneVersiones(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateVersiones(id: string, dto: UpdateVersionesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
