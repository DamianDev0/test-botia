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

  async createMotivos(dto: CreateMotivosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllMotivos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneMotivos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateMotivos(id: string, dto: UpdateMotivosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
