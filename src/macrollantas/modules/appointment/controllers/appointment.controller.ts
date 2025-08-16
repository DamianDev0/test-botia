import { Controller } from '@nestjs/common';
import { Citas } from '../entities/appointment.entity';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

import { BaseController } from '../../../common/controllers/base-controller.controller';
import { AppointmentsService } from '../services/appointment.service';

@Controller('appointments')
export class AppointmentsController extends BaseController<
  Citas,
  CreateAppointmentDto,
  UpdateAppointmentDto
>('Citas', CreateAppointmentDto, UpdateAppointmentDto) {
  constructor(service: AppointmentsService) {
    super(service);
  }
}
