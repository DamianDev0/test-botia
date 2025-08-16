import { PartialType } from '@nestjs/swagger';
import { CreateDatosImportadosDto } from './create-datos-importados.dto';

export class UpdateDatosImportadosDto extends PartialType(CreateDatosImportadosDto) {}
