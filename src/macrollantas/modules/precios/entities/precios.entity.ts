import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('PRECIOS')
export class Precios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  SERVICIO: string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ type: 'numeric', nullable: true })
  RANGO2: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ type: 'numeric', nullable: true })
  MEDIDA1: number | null;

  @Column({ type: 'numeric', nullable: true })
  MEDIDA2: number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ type: 'numeric', nullable: true })
  RANGO1: number | null;

  @Column({ nullable: true })
  EQUIVALE1: string | null;

  @Column({ type: 'numeric', nullable: true })
  PRECIO: number | null;
}
