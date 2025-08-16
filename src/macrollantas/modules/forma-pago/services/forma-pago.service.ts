import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormaPago } from '../entities/forma-pago.entity';
import { BaseAuthenticatedService } from '../../../common/services/base-authenticated.service';

@Injectable()
export class FormaPagoService extends BaseAuthenticatedService<FormaPago> {
  private readonly entityName = 'FORMA PAGO';
  constructor(
    @InjectRepository(FormaPago)
    protected readonly repository: Repository<FormaPago>,
  ) {
    super(repository);
  }

  async createFormaPago(dto: FormaPago, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllFormaPago(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneFormaPago(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateFormaPago(id: string, dto: FormaPago, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
