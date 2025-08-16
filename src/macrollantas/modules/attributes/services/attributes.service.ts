import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Atributos } from '../entities/attributes.entity';
import { Repository } from 'typeorm';
import { CreateAttributeDto } from '../dto/create-attribute.dto';
import { UpdateAttributeDto } from '../dto/update-attribute.dto';

@Injectable()
export class AttributesService extends BaseAuthenticatedService<Atributos> {
  private readonly entityName = 'Atributos';

  constructor(
    @InjectRepository(Atributos)
    attributesRepository: Repository<Atributos>,
  ) {
    super(attributesRepository);
  }

  async createAttribute(dto: CreateAttributeDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllAttributes(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneAttribute(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateAttribute(id: string, dto: UpdateAttributeDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
