import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VENCIMIENTOS')
export class Vencimientos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ name: 'DIA FINAL', nullable: true })
  'DIA FINAL': string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ name: 'DIA INICIAL', nullable: true })
  'DIA INICIAL': string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ name: 'KMS INICIAL', nullable: true })
  'KMS INICIAL': number | null;

  @Column({ nullable: true })
  servicio: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  usabilidad: string | null;

  @Column({ name: 'ID CLIENTE', nullable: true })
  'ID CLIENTE': string | null;

  @Column({ name: 'KMS FINAL', nullable: true })
  'KMS FINAL': number | null;
}
