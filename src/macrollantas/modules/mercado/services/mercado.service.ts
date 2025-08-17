import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Mercado } from '../entities/mercado.entity';
import { CreateMercadoDto } from '../dto/create-mercado.dto';
import { UpdateMercadoDto } from '../dto/update-mercado.dto';

@Injectable()
export class MercadoService extends BaseAuthenticatedService<Mercado> {
  private readonly entityName = 'MERCADO';

  constructor(
    @InjectRepository(Mercado)
    repository: Repository<Mercado>,
  ) {
    super(repository);
  }

  async createMercado(dto: CreateMercadoDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllMercado(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneMercado(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateMercado(id: string, dto: UpdateMercadoDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
