import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicios')
export class Servicios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  SERVICIO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ name: 'UNIDAD DE MEDIDA', nullable: true })
  'UNIDAD DE MEDIDA': string | null;

  @Column({ nullable: true })
  COSTO: number | null;

  @Column({ nullable: true })
  ICONO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ name: 'VALOR UNITARIO', nullable: true })
  'VALOR UNITARIO': number | null;

  @Column({ name: 'CANTIDAD POR UNIDAD', nullable: true })
  'CANTIDAD POR UNIDAD': number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUBCATEGORIA: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  INVENTARIO: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;
}
