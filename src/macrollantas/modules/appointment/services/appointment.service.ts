import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';

import { Repository } from 'typeorm';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { Citas } from '../entities/appointment.entity';

@Injectable()
export class AppointmentsService extends BaseAuthenticatedService<Citas> {
  private readonly entityName = 'Citas';

  constructor(
    @InjectRepository(Citas)
    appointmentsRepository: Repository<Citas>,
  ) {
    super(appointmentsRepository);
  }

  async createAppointment(dto: CreateAppointmentDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllAppointments(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneAppointment(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateAppointment(id: string, dto: UpdateAppointmentDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
