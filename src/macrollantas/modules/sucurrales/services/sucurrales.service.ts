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

  async createSucurrales(dto: CreateSucurralesDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSucurrales(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSucurrales(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSucurrales(id: string, dto: UpdateSucurralesDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
