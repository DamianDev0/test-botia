import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VENCIMIENTOS')
export class Vencimientos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ name: 'DIA FINAL', nullable: true })
  'DIA FINAL': string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ name: 'DIA INICIAL', nullable: true })
  'DIA INICIAL': string | null;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  PLACA: string | null;

  @Column({ name: 'KMS INICIAL', nullable: true })
  'KMS INICIAL': number | null;

  @Column({ nullable: true })
  SERVICIO: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  USABILIDAD: string | null;

  @Column({ name: 'ID CLIENTE', nullable: true })
  'ID CLIENTE': string | null;

  @Column({ name: 'KMS FINAL', nullable: true })
  'KMS FINAL': number | null;
}
