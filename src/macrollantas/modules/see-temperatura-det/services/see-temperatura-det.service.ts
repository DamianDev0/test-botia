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

  async createSeeTemperaturaDet(dto: CreateSeeTemperaturaDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeeTemperaturaDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeeTemperaturaDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeeTemperaturaDet(id: string, dto: UpdateSeeTemperaturaDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
