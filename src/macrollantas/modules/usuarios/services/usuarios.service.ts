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

  async createUsuarios(dto: CreateUsuariosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllUsuarios(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneUsuarios(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateUsuarios(id: string, dto: UpdateUsuariosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
