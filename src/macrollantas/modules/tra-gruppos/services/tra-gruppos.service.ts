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

  async createTraGruppos(dto: CreateTraGrupposDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraGruppos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraGruppos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraGruppos(id: string, dto: UpdateTraGrupposDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
