import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Clientes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  EMAIL: string | null;

  @Column({ nullable: true })
  TELEFONO: string | null;

  @Column({ nullable: true })
  FECHA: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  PLACA: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ name: 'NIT ASOCIADO', nullable: true })
  'NIT ASOCIADO': number | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  SEXO: string | null;

  @Column({ nullable: true })
  NIT: number | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  QR: string | null;
}
