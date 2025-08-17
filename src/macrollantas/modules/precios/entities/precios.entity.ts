import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('PRECIOS')
export class Precios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  servicio: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ type: 'numeric', nullable: true })
  rango2: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ type: 'numeric', nullable: true })
  medida1: number | null;

  @Column({ type: 'numeric', nullable: true })
  medida2: number | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ type: 'numeric', nullable: true })
  rango1: number | null;

  @Column({ nullable: true })
  equivale1: string | null;

  @Column({ type: 'numeric', nullable: true })
  precio: number | null;
}
