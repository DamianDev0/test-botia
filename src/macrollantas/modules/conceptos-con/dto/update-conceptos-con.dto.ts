import { PartialType } from '@nestjs/swagger';
import { CreateConceptosConDto } from './create-conceptos-con.dto';

export class UpdateConceptosConDto extends PartialType(CreateConceptosConDto) {}
