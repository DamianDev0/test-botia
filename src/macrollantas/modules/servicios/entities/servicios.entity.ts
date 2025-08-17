import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicios')
export class Servicios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  servicio: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ name: 'UNIDAD DE MEDIDA', nullable: true })
  'UNIDAD DE MEDIDA': string | null;

  @Column({ nullable: true })
  costo: number | null;

  @Column({ nullable: true })
  icono: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ name: 'VALOR UNITARIO', nullable: true })
  'VALOR UNITARIO': number | null;

  @Column({ name: 'CANTIDAD POR UNIDAD', nullable: true })
  'CANTIDAD POR UNIDAD': number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  inventario: string | null;

  @Column({ nullable: true })
  descripcion: string | null;
}
