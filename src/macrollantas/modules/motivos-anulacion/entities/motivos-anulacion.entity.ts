import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivos_anulacion')
export class MotivosAnulacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  motivo: string | null;
}
