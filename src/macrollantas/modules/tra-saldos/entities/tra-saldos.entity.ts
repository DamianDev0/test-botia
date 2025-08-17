import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_saldos')
export class TraSaldos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  valCosto: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  canSaldo: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  canEntradas: number | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  sku: string | null;

  @Column({ nullable: true })
  valPrecio: number | null;

  @Column({ nullable: true })
  periodo: string | null;

  @Column({ nullable: true })
  canSalidas: number | null;

  @Column({ nullable: true })
  fecha: string | null;

  @Column({ nullable: true })
  valSalidas: number | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  valInicial: number | null;

  @Column({ nullable: true })
  valEntradas: number | null;

  @Column({ nullable: true })
  canInicial: number | null;

  @Column({ nullable: true })
  tipov: string | null;

  @Column({ nullable: true })
  valSaldo: number | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
