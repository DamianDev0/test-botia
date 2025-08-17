import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Oreparacion12000 } from '../entities/oreparacion1-2000.entity';
import { CreateOreparacion12000Dto } from '../dto/create-oreparacion1-2000.dto';
import { UpdateOreparacion12000Dto } from '../dto/update-oreparacion1-2000.dto';

@Injectable()
export class Oreparacion12000Service extends BaseAuthenticatedService<Oreparacion12000> {
  private readonly entityName = 'OREPARACION1_2000';

  constructor(
    @InjectRepository(Oreparacion12000)
    repository: Repository<Oreparacion12000>,
  ) {
    super(repository);
  }

  async createOreparacion12000(dto: CreateOreparacion12000Dto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllOreparacion12000(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneOreparacion12000(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateOreparacion12000(id: string, dto: UpdateOreparacion12000Dto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
