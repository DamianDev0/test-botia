import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG TARGETA')
export class ConfigTargeta extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ name: 'VALOR ACTIVO', nullable: true })
  'VALOR ACTIVO': number | null;

  @Column({ nullable: true })
  imagen: string | null;

  @Column({ name: 'ACCION 1', nullable: true })
  'ACCION 1': string | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ default: true })
  compartir: boolean;

  @Column({ nullable: true })
  texto: string | null;

  @Column({ name: 'ACCION 3', nullable: true })
  'ACCION 3': string | null;

  @Column({ nullable: true })
  cliente: string | null;

  @Column({ name: 'VALOR INACTIVO', nullable: true })
  'VALOR INACTIVO': number | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ name: 'LISTA DESEOS', nullable: true })
  'LISTA DESEOS': string | null;

  @Column({ nullable: true })
  subtitulo: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ name: 'VALOR PROMO', nullable: true })
  'VALOR PROMO': number | null;

  @Column({ name: 'ACCION 2', nullable: true })
  'ACCION 2': string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ name: 'LISTA PEDIDO', nullable: true })
  'LISTA PEDIDO': string | null;

  @Column({ nullable: true })
  componentes: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'ID PLANTILLA', nullable: true })
  'ID PLANTILLA': string | null;

  @Column({ name: 'IMAGEN PROMO', nullable: true })
  'IMAGEN PROMO': string | null;
}
