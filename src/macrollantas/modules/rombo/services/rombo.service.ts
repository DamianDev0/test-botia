import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Rombo } from '../entities/rombo.entity';
import { CreateRomboDto } from '../dto/create-rombo.dto';
import { UpdateRomboDto } from '../dto/update-rombo.dto';

@Injectable()
export class RomboService extends BaseAuthenticatedService<Rombo> {
  private readonly entityName = 'rombo';

  constructor(
    @InjectRepository(Rombo)
    repository: Repository<Rombo>,
  ) {
    super(repository);
  }

  async createRombo(dto: CreateRomboDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllRombo(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneRombo(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateRombo(id: string, dto: UpdateRomboDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
