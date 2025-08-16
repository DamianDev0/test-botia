import { PartialType } from '@nestjs/swagger';
import { CreateConfigDocumentoDto } from './create-config-documento.dto';

export class UpdateConfigDocumentoDto extends PartialType(CreateConfigDocumentoDto) {}
