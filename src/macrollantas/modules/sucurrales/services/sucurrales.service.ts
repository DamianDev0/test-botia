import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Sucurrales } from '../entities/sucurrales.entity';
import { CreateSucurralesDto } from '../dto/create-sucurrales.dto';
import { UpdateSucurralesDto } from '../dto/update-sucurrales.dto';

@Injectable()
export class SucurralesService extends BaseAuthenticatedService<Sucurrales> {
  private readonly entityName = 'sucurrales';

  constructor(
    @InjectRepository(Sucurrales)
    repository: Repository<Sucurrales>,
  ) {
    super(repository);
  }

  async createSucurrales(dto: CreateSucurralesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSucurrales(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSucurrales(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSucurrales(id: string, dto: UpdateSucurralesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
