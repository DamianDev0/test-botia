import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_movtos_det')
export class TraMovtosDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ name: 'NUMERO REMISION', nullable: true })
  'NUMERO REMISION': string | null;

  @Column({ name: 'CANTIDAD EXI', nullable: true })
  'CANTIDAD EXI': number | null;

  @Column({ name: 'NOMBRE PROVEEDOR', nullable: true })
  'NOMBRE PROVEEDOR': string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ nullable: true })
  ACCION: string | null;

  @Column({ nullable: true })
  NOTAS2: string | null;

  @Column({ name: 'VRU HOMOLOGADO', nullable: true })
  'VRU HOMOLOGADO': number | null;

  @Column({ name: 'VRU ORIGINAL', nullable: true })
  'VRU ORIGINAL': number | null;

  @Column({ nullable: true })
  TIEMPO: number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ default: true })
  APROBACION: boolean;

  @Column({ name: 'DESCRIPCION 2', nullable: true })
  'DESCRIPCION 2': string | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;

  @Column({ nullable: true })
  OPERACION: string | null;

  @Column({ nullable: true })
  IVA: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  ORIGEN: string | null;

  @Column({ nullable: true })
  ID_TRA_COTIZACION: string | null;

  @Column({ name: 'NUMERO SALIDA', nullable: true })
  'NUMERO SALIDA': string | null;

  @Column({ nullable: true })
  UNIDAD: string | null;

  @Column({ name: 'CANTIDAD DES', nullable: true })
  'CANTIDAD DES': number | null;

  @Column({ name: 'VRT ORIGINAL', nullable: true })
  'VRT ORIGINAL': number | null;

  @Column({ name: 'NIT PROVEEDOR', nullable: true })
  'NIT PROVEEDOR': string | null;

  @Column({ name: 'NUMERO ASOCIADO', nullable: true })
  'NUMERO ASOCIADO': string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ name: 'VRT HOMOLOGADO', nullable: true })
  'VRT HOMOLOGADO': number | null;

  @Column({ name: 'CANTIDAD PLA', nullable: true })
  'CANTIDAD PLA': number | null;

  @Column({ nullable: true })
  NOTAS1: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ name: 'CANTIDAD PED', nullable: true })
  'CANTIDAD PED': number | null;

  @Column({ name: 'CANTIDAD PEN', nullable: true })
  'CANTIDAD PEN': number | null;

  @Column({ nullable: true })
  TECNICO: string | null;

  @Column({ name: 'CONCEPTO ASOCIADO', nullable: true })
  'CONCEPTO ASOCIADO': string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ name: 'NUMERO FACTURA', nullable: true })
  'NUMERO FACTURA': string | null;
}
