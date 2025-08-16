import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraCilindraje } from '../entities/tra-cilindraje.entity';
import { CreateTraCilindrajeDto } from '../dto/create-tra-cilindraje.dto';
import { UpdateTraCilindrajeDto } from '../dto/update-tra-cilindraje.dto';

@Injectable()
export class TraCilindrajeService extends BaseAuthenticatedService<TraCilindraje> {
  private readonly entityName = 'tra_cilindraje';

  constructor(
    @InjectRepository(TraCilindraje)
    repository: Repository<TraCilindraje>,
  ) {
    super(repository);
  }

  async createTraCilindraje(dto: CreateTraCilindrajeDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraCilindraje(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraCilindraje(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraCilindraje(id: string, dto: UpdateTraCilindrajeDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
