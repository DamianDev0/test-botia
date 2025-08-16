import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DETALLE_CELDAS')
export class DetalleCeldas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;
}
