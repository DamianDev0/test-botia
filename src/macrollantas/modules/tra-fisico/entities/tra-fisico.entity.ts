import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_fisico')
export class TraFisico extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  PERIODO: string | null;

  @Column({ name: 'UNIDAD DE MEDIDA', nullable: true })
  'UNIDAD DE MEDIDA': string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  BODEGA: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ICONO: string | null;

  @Column({ name: 'CANTIDAD POR UNIDAD', nullable: true })
  'CANTIDAD POR UNIDAD': number | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ name: 'CANTIDAD TOTAL', nullable: true })
  'CANTIDAD TOTAL': number | null;

  @Column({ nullable: true })
  COSTO: number | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  UBICACION: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  PRECIO: number | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ nullable: true })
  PLU: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  USUARIO: string | null;
}
