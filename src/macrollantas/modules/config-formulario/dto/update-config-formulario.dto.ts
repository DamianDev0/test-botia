import { PartialType } from '@nestjs/swagger';
import { CreateConfigFormularioDto } from './create-config-formulario.dto';

export class UpdateConfigFormularioDto extends PartialType(CreateConfigFormularioDto) {}
