import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { DatosImportados } from '../entities/datos-importados.entity';
import { CreateDatosImportadosDto } from '../dto/create-datos-importados.dto';
import { UpdateDatosImportadosDto } from '../dto/update-datos-importados.dto';

@Injectable()
export class DatosImportadosService extends BaseAuthenticatedService<DatosImportados> {
  private readonly entityName = 'datos_importados';

  constructor(
    @InjectRepository(DatosImportados)
    repository: Repository<DatosImportados>,
  ) {
    super(repository);
  }

  async createDatosImportados(dto: CreateDatosImportadosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllDatosImportados(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneDatosImportados(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateDatosImportados(id: string, dto: UpdateDatosImportadosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
