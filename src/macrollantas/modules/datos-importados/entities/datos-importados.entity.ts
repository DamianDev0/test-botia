import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datos_importados')
export class DatosImportados extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;
}
