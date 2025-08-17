import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OREPARACION1_2000')
export class Oreparacion12000 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fechacreacion: Date | null;

  @Column({ nullable: true })
  claveusuario: string | null;

  @Column({ nullable: true })
  observaciones: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  iva: number | null;

  @Column({ nullable: true })
  rombo: string | null;

  @Column({ nullable: true })
  mes: string | null;

  @Column({ nullable: true })
  impreso: number | null;

  @Column({ nullable: true })
  vendedor: string | null;

  @Column({ nullable: true })
  anulado: number | null;

  @Column({ nullable: true })
  bodega: string | null;

  @Column({ nullable: true })
  NÚMERO: string | null;

  @Column({ nullable: true })
  patio: number | null;

  @Column({ nullable: true })
  cerrada: number | null;

  @Column({ nullable: true })
  valoraprobado: number | null;

  @Column({ nullable: true })
  liquidar: number | null;

  @Column({ nullable: true })
  mercadeo: number | null;

  @Column({ nullable: true })
  temp: string | null;

  @Column({ nullable: true })
  espera: number | null;

  @Column({ nullable: true })
  kilometraje: number | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  valor: number | null;
}
