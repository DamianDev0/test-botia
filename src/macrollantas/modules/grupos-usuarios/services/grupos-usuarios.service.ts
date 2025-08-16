import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { GruposUsuarios } from '../entities/grupos-usuarios.entity';
import { CreateGruposUsuariosDto } from '../dto/create-grupos-usuarios.dto';
import { UpdateGruposUsuariosDto } from '../dto/update-grupos-usuarios.dto';

@Injectable()
export class GruposUsuariosService extends BaseAuthenticatedService<GruposUsuarios> {
  private readonly entityName = 'grupos_usuarios';

  constructor(
    @InjectRepository(GruposUsuarios)
    repository: Repository<GruposUsuarios>,
  ) {
    super(repository);
  }

  async createGruposUsuarios(dto: CreateGruposUsuariosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllGruposUsuarios(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneGruposUsuarios(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateGruposUsuarios(id: string, dto: UpdateGruposUsuariosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
