import { Controller } from '@nestjs/common';
import { TraCilindraje } from '../entities/tra-cilindraje.entity';
import { CreateTraCilindrajeDto } from '../dto/create-tra-cilindraje.dto';
import { UpdateTraCilindrajeDto } from '../dto/update-tra-cilindraje.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraCilindrajeService } from '../services/tra-cilindraje.service';

@Controller('tra-cilindraje')
export class TraCilindrajeController extends BaseController<
  TraCilindraje,
  CreateTraCilindrajeDto,
  UpdateTraCilindrajeDto
>('tra_cilindraje', CreateTraCilindrajeDto, UpdateTraCilindrajeDto) {
  constructor(service: TraCilindrajeService) {
    super(service);
  }
}
