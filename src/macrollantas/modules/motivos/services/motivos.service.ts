import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Motivos } from '../entities/motivos.entity';
import { CreateMotivosDto } from '../dto/create-motivos.dto';
import { UpdateMotivosDto } from '../dto/update-motivos.dto';

@Injectable()
export class MotivosService extends BaseAuthenticatedService<Motivos> {
  private readonly entityName = 'motivos';

  constructor(
    @InjectRepository(Motivos)
    repository: Repository<Motivos>,
  ) {
    super(repository);
  }

  async createMotivos(dto: CreateMotivosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllMotivos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneMotivos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateMotivos(id: string, dto: UpdateMotivosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
