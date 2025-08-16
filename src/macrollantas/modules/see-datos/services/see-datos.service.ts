import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeDatos } from '../entities/see-datos.entity';
import { CreateSeeDatosDto } from '../dto/create-see-datos.dto';
import { UpdateSeeDatosDto } from '../dto/update-see-datos.dto';

@Injectable()
export class SeeDatosService extends BaseAuthenticatedService<SeeDatos> {
  private readonly entityName = 'see_datos';

  constructor(
    @InjectRepository(SeeDatos)
    repository: Repository<SeeDatos>,
  ) {
    super(repository);
  }

  async createSeeDatos(dto: CreateSeeDatosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeeDatos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeeDatos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeeDatos(id: string, dto: UpdateSeeDatosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
