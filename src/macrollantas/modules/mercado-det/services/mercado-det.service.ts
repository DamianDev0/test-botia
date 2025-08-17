import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { MercadoDet } from '../entities/mercado-det.entity';
import { CreateMercadoDetDto } from '../dto/create-mercado-det.dto';
import { UpdateMercadoDetDto } from '../dto/update-mercado-det.dto';

@Injectable()
export class MercadoDetService extends BaseAuthenticatedService<MercadoDet> {
  private readonly entityName = 'MERCADO_DET';

  constructor(
    @InjectRepository(MercadoDet)
    repository: Repository<MercadoDet>,
  ) {
    super(repository);
  }

  async createMercadoDet(dto: CreateMercadoDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllMercadoDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneMercadoDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateMercadoDet(id: string, dto: UpdateMercadoDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
