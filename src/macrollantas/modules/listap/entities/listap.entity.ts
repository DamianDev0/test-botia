import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('LISTAP')
export class ListAp extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ type: 'numeric', nullable: true })
  PORCENTAJE_FIG: number | null;

  @Column({ type: 'numeric', nullable: true })
  PORCENTAJE_RC: number | null;

  @Column({ nullable: true })
  SKU: string | null;

  @Column({ name: 'PRECIO RC', type: 'numeric', nullable: true })
  'PRECIO RC': number | null;

  @Column({ name: 'PRECIO FIGURA', type: 'numeric', nullable: true })
  'PRECIO FIGURA': number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ type: 'numeric', nullable: true })
  PORCENTAJE_VEN: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  UNIDAD_MEDIDA: string | null;

  @Column({ type: 'numeric', nullable: true })
  MEDIDA: number | null;

  @Column({ type: 'numeric', nullable: true })
  PORCENTAJE_BAS: number | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  CALIBRE: string | null;

  @Column({ type: 'numeric', nullable: true })
  FACTOR: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'PRECIO VENTA', type: 'numeric', nullable: true })
  'PRECIO VENTA': number | null;

  @Column({ name: 'PRECIO BASE', type: 'numeric', nullable: true })
  'PRECIO BASE': number | null;
}
