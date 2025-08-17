import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { MotivosAnulacion } from '../entities/motivos-anulacion.entity';
import { CreateMotivosAnulacionDto } from '../dto/create-motivos-anulacion.dto';
import { UpdateMotivosAnulacionDto } from '../dto/update-motivos-anulacion.dto';

@Injectable()
export class MotivosAnulacionService extends BaseAuthenticatedService<MotivosAnulacion> {
  private readonly entityName = 'motivos_anulacion';

  constructor(
    @InjectRepository(MotivosAnulacion)
    repository: Repository<MotivosAnulacion>,
  ) {
    super(repository);
  }

  async createMotivosAnulacion(dto: CreateMotivosAnulacionDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllMotivosAnulacion(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneMotivosAnulacion(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateMotivosAnulacion(id: string, dto: UpdateMotivosAnulacionDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
