import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeCostoKwh } from '../entities/see-costo-kwh.entity';
import { CreateSeeCostoKwhDto } from '../dto/create-see-costo-kwh.dto';
import { UpdateSeeCostoKwhDto } from '../dto/update-see-costo-kwh.dto';

@Injectable()
export class SeeCostoKwhService extends BaseAuthenticatedService<SeeCostoKwh> {
  private readonly entityName = 'see_costo_kwh';

  constructor(
    @InjectRepository(SeeCostoKwh)
    repository: Repository<SeeCostoKwh>,
  ) {
    super(repository);
  }

  async createSeeCostoKwh(dto: CreateSeeCostoKwhDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeeCostoKwh(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeeCostoKwh(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeeCostoKwh(id: string, dto: UpdateSeeCostoKwhDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
