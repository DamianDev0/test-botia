import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraGruppos } from '../entities/tra-gruppos.entity';
import { CreateTraGrupposDto } from '../dto/create-tra-gruppos.dto';
import { UpdateTraGrupposDto } from '../dto/update-tra-gruppos.dto';

@Injectable()
export class TraGrupposService extends BaseAuthenticatedService<TraGruppos> {
  private readonly entityName = 'tra_gruppos';

  constructor(
    @InjectRepository(TraGruppos)
    repository: Repository<TraGruppos>,
  ) {
    super(repository);
  }

  async createTraGruppos(dto: CreateTraGrupposDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraGruppos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraGruppos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraGruppos(id: string, dto: UpdateTraGrupposDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
