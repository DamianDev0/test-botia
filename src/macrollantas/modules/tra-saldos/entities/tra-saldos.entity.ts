import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_saldos')
export class TraSaldos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  VAL_COSTO: number | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  CAN_SALDO: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  CAN_ENTRADAS: number | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  SKU: string | null;

  @Column({ nullable: true })
  VAL_PRECIO: number | null;

  @Column({ nullable: true })
  PERIODO: string | null;

  @Column({ nullable: true })
  CAN_SALIDAS: number | null;

  @Column({ nullable: true })
  FECHA: string | null;

  @Column({ nullable: true })
  VAL_SALIDAS: number | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  VAL_INICIAL: number | null;

  @Column({ nullable: true })
  VAL_ENTRADAS: number | null;

  @Column({ nullable: true })
  CAN_INICIAL: number | null;

  @Column({ nullable: true })
  TIPOV: string | null;

  @Column({ nullable: true })
  VAL_SALDO: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;
}
