import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Usuarios } from '../entities/usuarios.entity';
import { CreateUsuariosDto } from '../dto/create-usuarios.dto';
import { UpdateUsuariosDto } from '../dto/update-usuarios.dto';

@Injectable()
export class UsuariosService extends BaseAuthenticatedService<Usuarios> {
  private readonly entityName = 'usuarios';

  constructor(
    @InjectRepository(Usuarios)
    repository: Repository<Usuarios>,
  ) {
    super(repository);
  }

  async createUsuarios(dto: CreateUsuariosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllUsuarios(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneUsuarios(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateUsuarios(id: string, dto: UpdateUsuariosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
