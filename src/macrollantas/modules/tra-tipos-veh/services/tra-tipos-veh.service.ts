import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraTiposVeh } from '../entities/tra-tipos-veh.entity';
import { CreateTraTiposVehDto } from '../dto/create-tra-tipos-veh.dto';
import { UpdateTraTiposVehDto } from '../dto/update-tra-tipos-veh.dto';

@Injectable()
export class TraTiposVehService extends BaseAuthenticatedService<TraTiposVeh> {
  private readonly entityName = 'tra_tipos_veh';

  constructor(
    @InjectRepository(TraTiposVeh)
    repository: Repository<TraTiposVeh>,
  ) {
    super(repository);
  }

  async createTraTiposVeh(dto: CreateTraTiposVehDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraTiposVeh(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraTiposVeh(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraTiposVeh(id: string, dto: UpdateTraTiposVehDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
