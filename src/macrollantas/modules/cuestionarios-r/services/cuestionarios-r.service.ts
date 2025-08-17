import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { CuestionariosR } from '../entities/cuestionarios-r.entity';
import { CreateCuestionariosRDto } from '../dto/create-cuestionarios-r.dto';
import { UpdateCuestionariosRDto } from '../dto/update-cuestionarios-r.dto';

@Injectable()
export class CuestionariosRService extends BaseAuthenticatedService<CuestionariosR> {
  private readonly entityName = 'CUESTIONARIOS_R';

  constructor(
    @InjectRepository(CuestionariosR)
    repository: Repository<CuestionariosR>,
  ) {
    super(repository);
  }

  async createCuestionariosR(dto: CreateCuestionariosRDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllCuestionariosR(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneCuestionariosR(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateCuestionariosR(id: string, dto: UpdateCuestionariosRDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
