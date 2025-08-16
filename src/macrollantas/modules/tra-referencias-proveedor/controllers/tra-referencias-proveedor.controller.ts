import { Controller } from '@nestjs/common';
import { TraReferenciasProveedor } from '../entities/tra-referencias-proveedor.entity';
import { CreateTraReferenciasProveedorDto } from '../dto/create-tra-referencias-proveedor.dto';
import { UpdateTraReferenciasProveedorDto } from '../dto/update-tra-referencias-proveedor.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraReferenciasProveedorService } from '../services/tra-referencias-proveedor.service';

@Controller('tra-referencias-proveedor')
export class TraReferenciasProveedorController extends BaseController<
  TraReferenciasProveedor,
  CreateTraReferenciasProveedorDto,
  UpdateTraReferenciasProveedorDto
>('tra_referencias_proveedor', CreateTraReferenciasProveedorDto, UpdateTraReferenciasProveedorDto) {
  constructor(service: TraReferenciasProveedorService) {
    super(service);
  }
}
