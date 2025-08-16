import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivos_anulacion')
export class MotivosAnulacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  motivo: string | null;
}
