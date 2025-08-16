import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraPlantillas } from '../entities/tra-plantillas.entity';
import { CreateTraPlantillasDto } from '../dto/create-tra-plantillas.dto';
import { UpdateTraPlantillasDto } from '../dto/update-tra-plantillas.dto';

@Injectable()
export class TraPlantillasService extends BaseAuthenticatedService<TraPlantillas> {
  private readonly entityName = 'tra_plantillas';

  constructor(
    @InjectRepository(TraPlantillas)
    repository: Repository<TraPlantillas>,
  ) {
    super(repository);
  }

  async createTraPlantillas(dto: CreateTraPlantillasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraPlantillas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraPlantillas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraPlantillas(id: string, dto: UpdateTraPlantillasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
