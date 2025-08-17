import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraPlantillasDet } from '../entities/tra-plantillas-det.entity';
import { CreateTraPlantillasDetDto } from '../dto/create-tra-plantillas-det.dto';
import { UpdateTraPlantillasDetDto } from '../dto/update-tra-plantillas-det.dto';

@Injectable()
export class TraPlantillasDetService extends BaseAuthenticatedService<TraPlantillasDet> {
  private readonly entityName = 'tra_plantillas_det';

  constructor(
    @InjectRepository(TraPlantillasDet)
    repository: Repository<TraPlantillasDet>,
  ) {
    super(repository);
  }

  async createTraPlantillasDet(dto: CreateTraPlantillasDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraPlantillasDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraPlantillasDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraPlantillasDet(id: string, dto: UpdateTraPlantillasDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
