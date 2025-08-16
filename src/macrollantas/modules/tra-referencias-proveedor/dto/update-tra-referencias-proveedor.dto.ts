import { PartialType } from '@nestjs/swagger';
import { CreateTraReferenciasProveedorDto } from './create-tra-referencias-proveedor.dto';

export class UpdateTraReferenciasProveedorDto extends PartialType(CreateTraReferenciasProveedorDto) {}
