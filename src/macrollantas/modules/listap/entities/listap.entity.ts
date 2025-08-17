import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('LISTAP')
export class ListAp extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ type: 'numeric', nullable: true })
  porcentajeFig: number | null;

  @Column({ type: 'numeric', nullable: true })
  porcentajeRc: number | null;

  @Column({ nullable: true })
  sku: string | null;

  @Column({ name: 'PRECIO RC', type: 'numeric', nullable: true })
  'PRECIO RC': number | null;

  @Column({ name: 'PRECIO FIGURA', type: 'numeric', nullable: true })
  'PRECIO FIGURA': number | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ type: 'numeric', nullable: true })
  porcentajeVen: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  unidadMedida: string | null;

  @Column({ type: 'numeric', nullable: true })
  medida: number | null;

  @Column({ type: 'numeric', nullable: true })
  porcentajeBas: number | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  calibre: string | null;

  @Column({ type: 'numeric', nullable: true })
  factor: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'PRECIO VENTA', type: 'numeric', nullable: true })
  'PRECIO VENTA': number | null;

  @Column({ name: 'PRECIO BASE', type: 'numeric', nullable: true })
  'PRECIO BASE': number | null;
}
