import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_periodos')
export class TraPeriodos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  AÑO: number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  MES: number | null;

  @Column({ nullable: true })
  PERIODO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;
}
