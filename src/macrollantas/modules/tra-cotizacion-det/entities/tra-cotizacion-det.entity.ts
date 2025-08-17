import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_cotizacion_det')
export class TraCotizacionDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'NUMERO ASOCIADO', nullable: true })
  'NUMERO ASOCIADO': string | null;

  @Column({ nullable: true })
  componente: string | null;

  @Column({ name: 'CANTIDAD PEN', nullable: true })
  'CANTIDAD PEN': number | null;

  @Column({ name: 'NIT PROVEEDOR', nullable: true })
  'NIT PROVEEDOR': string | null;

  @Column({ name: 'NUMERO SALIDA', nullable: true })
  'NUMERO SALIDA': string | null;

  @Column({ name: 'CANTIDAD EXI', nullable: true })
  'CANTIDAD EXI': number | null;

  @Column({ nullable: true })
  notas1: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  operacion: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  notas2: string | null;

  @Column({ nullable: true })
  unidad: string | null;

  @Column({ default: true })
  aprobacion: boolean;

  @Column({ nullable: true })
  tecnico: string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  tiempo: number | null;

  @Column({ name: 'NUMERO FACTURA', nullable: true })
  'NUMERO FACTURA': string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ name: 'CANTIDAD PED', nullable: true })
  'CANTIDAD PED': number | null;

  @Column({ name: 'CANTIDAD PLA', nullable: true })
  'CANTIDAD PLA': number | null;

  @Column({ nullable: true })
  accion: string | null;

  @Column({ nullable: true })
  origen: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ name: 'VRU ORIGINAL', nullable: true })
  'VRU ORIGINAL': number | null;

  @Column({ name: 'CANTIDAD DES', nullable: true })
  'CANTIDAD DES': number | null;

  @Column({ nullable: true })
  iva: number | null;

  @Column({ name: 'NOMBRE PROVEEDOR', nullable: true })
  'NOMBRE PROVEEDOR': string | null;

  @Column({ name: 'VRT ORIGINAL', nullable: true })
  'VRT ORIGINAL': number | null;

  @Column({ name: 'VRU HOMOLOGADO', nullable: true })
  'VRU HOMOLOGADO': number | null;

  @Column({ name: 'DESCRIPCION 2', nullable: true })
  'DESCRIPCION 2': string | null;

  @Column({ nullable: true })
  idTraCotizacion: string | null;

  @Column({ name: 'VRT HOMOLOGADO', nullable: true })
  'VRT HOMOLOGADO': number | null;

  @Column({ name: 'CONCEPTO ASOCIADO', nullable: true })
  'CONCEPTO ASOCIADO': string | null;

  @Column({ name: 'NUMERO REMISION', nullable: true })
  'NUMERO REMISION': string | null;
}
