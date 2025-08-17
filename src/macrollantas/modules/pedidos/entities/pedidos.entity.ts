import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pedidos')
export class Pedidos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  bodega: string | null;

  @Column({ nullable: true })
  iva: number | null;

  @Column({ nullable: true })
  NÚMERO: string | null;

  @Column({ nullable: true })
  temp: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  observaciones: string | null;

  @Column({ nullable: true })
  mercadeo: number | null;

  @Column({ nullable: true })
  fechacreacion: Date | null;

  @Column({ nullable: true })
  impreso: number | null;

  @Column({ nullable: true })
  mes: string | null;

  @Column({ nullable: true })
  liquidar: number | null;

  @Column({ nullable: true })
  rombo: string | null;

  @Column({ nullable: true })
  vendedor: string | null;

  @Column({ nullable: true })
  espera: number | null;

  @Column({ nullable: true })
  patio: number | null;

  @Column({ nullable: true })
  valoraprobado: number | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  claveusuario: string | null;

  @Column({ nullable: true })
  cerrada: number | null;

  @Column({ nullable: true })
  kilometraje: number | null;

  @Column({ nullable: true })
  anulado: number | null;

  @Column({ name: 'VALOR PROMO', nullable: true })
  'VALOR PROMO': number | null;

  @Column({ nullable: true })
  telefono: string | null;

  @Column({ nullable: true })
  idMovimiento: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  valor: number | null;
}
