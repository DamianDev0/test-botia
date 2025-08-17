import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { CuestionariosP } from '../entities/cuestionarios-p.entity';
import { CreateCuestionariosPDto } from '../dto/create-cuestionarios-p.dto';
import { UpdateCuestionariosPDto } from '../dto/update-cuestionarios-p.dto';

@Injectable()
export class CuestionariosPService extends BaseAuthenticatedService<CuestionariosP> {
  private readonly entityName = 'CUESTIONARIOS_P';

  constructor(
    @InjectRepository(CuestionariosP)
    repository: Repository<CuestionariosP>,
  ) {
    super(repository);
  }

  async createCuestionariosP(dto: CreateCuestionariosPDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllCuestionariosP(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneCuestionariosP(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateCuestionariosP(id: string, dto: UpdateCuestionariosPDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
