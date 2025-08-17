import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeTemperaturaDet } from '../entities/see-temperatura-det.entity';
import { CreateSeeTemperaturaDetDto } from '../dto/create-see-temperatura-det.dto';
import { UpdateSeeTemperaturaDetDto } from '../dto/update-see-temperatura-det.dto';

@Injectable()
export class SeeTemperaturaDetService extends BaseAuthenticatedService<SeeTemperaturaDet> {
  private readonly entityName = 'see_temperatura_det';

  constructor(
    @InjectRepository(SeeTemperaturaDet)
    repository: Repository<SeeTemperaturaDet>,
  ) {
    super(repository);
  }

  async createSeeTemperaturaDet(dto: CreateSeeTemperaturaDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeeTemperaturaDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeeTemperaturaDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeeTemperaturaDet(id: string, dto: UpdateSeeTemperaturaDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
