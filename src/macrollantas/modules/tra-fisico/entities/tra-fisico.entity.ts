import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_fisico')
export class TraFisico extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  periodo: string | null;

  @Column({ name: 'UNIDAD DE MEDIDA', nullable: true })
  'UNIDAD DE MEDIDA': string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  bodega: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  icono: string | null;

  @Column({ name: 'CANTIDAD POR UNIDAD', nullable: true })
  'CANTIDAD POR UNIDAD': number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ name: 'CANTIDAD TOTAL', nullable: true })
  'CANTIDAD TOTAL': number | null;

  @Column({ nullable: true })
  costo: number | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  ubicacion: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  precio: number | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  plu: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  usuario: string | null;
}
