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

  async createTraPlantillasDet(dto: CreateTraPlantillasDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraPlantillasDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraPlantillasDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraPlantillasDet(id: string, dto: UpdateTraPlantillasDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
