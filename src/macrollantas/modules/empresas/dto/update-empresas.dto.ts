import { PartialType } from '@nestjs/swagger';
import { CreateEmpresasDto } from './create-empresas.dto';

export class UpdateEmpresasDto extends PartialType(CreateEmpresasDto) {}
