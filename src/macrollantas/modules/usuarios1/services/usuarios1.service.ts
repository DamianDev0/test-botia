import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Usuarios1 } from '../entities/usuarios1.entity';
import { CreateUsuarios1Dto } from '../dto/create-usuarios1.dto';
import { UpdateUsuarios1Dto } from '../dto/update-usuarios1.dto';

@Injectable()
export class Usuarios1Service extends BaseAuthenticatedService<Usuarios1> {
  private readonly entityName = 'usuarios1';

  constructor(
    @InjectRepository(Usuarios1)
    repository: Repository<Usuarios1>,
  ) {
    super(repository);
  }

  async createUsuarios1(dto: CreateUsuarios1Dto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllUsuarios1(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneUsuarios1(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateUsuarios1(id: string, dto: UpdateUsuarios1Dto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
