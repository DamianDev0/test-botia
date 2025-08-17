import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Cuestionarios } from '../entities/cuestionarios.entity';
import { CreateCuestionariosDto } from '../dto/create-cuestionarios.dto';
import { UpdateCuestionariosDto } from '../dto/update-cuestionarios.dto';

@Injectable()
export class CuestionariosService extends BaseAuthenticatedService<Cuestionarios> {
  private readonly entityName = 'CUESTIONARIOS';

  constructor(
    @InjectRepository(Cuestionarios)
    repository: Repository<Cuestionarios>,
  ) {
    super(repository);
  }

  async createCuestionarios(dto: CreateCuestionariosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllCuestionarios(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneCuestionarios(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateCuestionarios(id: string, dto: UpdateCuestionariosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
