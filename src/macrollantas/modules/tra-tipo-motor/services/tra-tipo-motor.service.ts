import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraTipoMotor } from '../entities/tra-tipo-motor.entity';
import { CreateTraTipoMotorDto } from '../dto/create-tra-tipo-motor.dto';
import { UpdateTraTipoMotorDto } from '../dto/update-tra-tipo-motor.dto';

@Injectable()
export class TraTipoMotorService extends BaseAuthenticatedService<TraTipoMotor> {
  private readonly entityName = 'tra_tipo_motor';

  constructor(
    @InjectRepository(TraTipoMotor)
    repository: Repository<TraTipoMotor>,
  ) {
    super(repository);
  }

  async createTraTipoMotor(dto: CreateTraTipoMotorDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraTipoMotor(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraTipoMotor(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraTipoMotor(id: string, dto: UpdateTraTipoMotorDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
