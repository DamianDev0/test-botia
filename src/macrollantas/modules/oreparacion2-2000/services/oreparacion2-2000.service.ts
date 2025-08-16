import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Oreparacion22000 } from '../entities/oreparacion2-2000.entity';
import { CreateOreparacion22000Dto } from '../dto/create-oreparacion2-2000.dto';
import { UpdateOreparacion22000Dto } from '../dto/update-oreparacion2-2000.dto';

@Injectable()
export class Oreparacion22000Service extends BaseAuthenticatedService<Oreparacion22000> {
  private readonly entityName = 'OREPARACION2_2000';

  constructor(
    @InjectRepository(Oreparacion22000)
    repository: Repository<Oreparacion22000>,
  ) {
    super(repository);
  }

  async createOreparacion22000(dto: CreateOreparacion22000Dto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllOreparacion22000(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneOreparacion22000(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateOreparacion22000(id: string, dto: UpdateOreparacion22000Dto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
