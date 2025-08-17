import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { VersionesDet } from '../entities/versiones-det.entity';
import { CreateVersionesDetDto } from '../dto/create-versiones-det.dto';
import { UpdateVersionesDetDto } from '../dto/update-versiones-det.dto';

@Injectable()
export class VersionesDetService extends BaseAuthenticatedService<VersionesDet> {
  private readonly entityName = 'VERSIONES_DET';

  constructor(
    @InjectRepository(VersionesDet)
    repository: Repository<VersionesDet>,
  ) {
    super(repository);
  }

  async createVersionesDet(dto: CreateVersionesDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllVersionesDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneVersionesDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateVersionesDet(id: string, dto: UpdateVersionesDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
