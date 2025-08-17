import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeTemperatura } from '../entities/see-temperatura.entity';
import { CreateSeeTemperaturaDto } from '../dto/create-see-temperatura.dto';
import { UpdateSeeTemperaturaDto } from '../dto/update-see-temperatura.dto';

@Injectable()
export class SeeTemperaturaService extends BaseAuthenticatedService<SeeTemperatura> {
  private readonly entityName = 'see_temperatura';

  constructor(
    @InjectRepository(SeeTemperatura)
    repository: Repository<SeeTemperatura>,
  ) {
    super(repository);
  }

  async createSeeTemperatura(dto: CreateSeeTemperaturaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeeTemperatura(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeeTemperatura(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeeTemperatura(id: string, dto: UpdateSeeTemperaturaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
