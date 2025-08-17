import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMovtosDet } from '../entities/tra-movtos-det.entity';
import { CreateTraMovtosDetDto } from '../dto/create-tra-movtos-det.dto';
import { UpdateTraMovtosDetDto } from '../dto/update-tra-movtos-det.dto';

@Injectable()
export class TraMovtosDetService extends BaseAuthenticatedService<TraMovtosDet> {
  private readonly entityName = 'tra_movtos_det';

  constructor(
    @InjectRepository(TraMovtosDet)
    repository: Repository<TraMovtosDet>,
  ) {
    super(repository);
  }

  async createTraMovtosDet(dto: CreateTraMovtosDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraMovtosDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraMovtosDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraMovtosDet(id: string, dto: UpdateTraMovtosDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
