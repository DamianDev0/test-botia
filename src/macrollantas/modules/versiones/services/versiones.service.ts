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

  async createVersiones(dto: CreateVersionesDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllVersiones(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneVersiones(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateVersiones(id: string, dto: UpdateVersionesDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
