import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Zonas } from '../entities/zonas.entity';
import { CreateZonasDto } from '../dto/create-zonas.dto';
import { UpdateZonasDto } from '../dto/update-zonas.dto';

@Injectable()
export class ZonasService extends BaseAuthenticatedService<Zonas> {
  private readonly entityName = 'ZONAS';

  constructor(
    @InjectRepository(Zonas)
    repository: Repository<Zonas>,
  ) {
    super(repository);
  }

  async createZonas(dto: CreateZonasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllZonas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneZonas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateZonas(id: string, dto: UpdateZonasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
