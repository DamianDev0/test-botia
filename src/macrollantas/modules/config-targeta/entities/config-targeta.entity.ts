import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG TARGETA')
export class ConfigTargeta extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ name: 'VALOR ACTIVO', nullable: true })
  'VALOR ACTIVO': number | null;

  @Column({ nullable: true })
  IMAGEN: string | null;

  @Column({ name: 'ACCION 1', nullable: true })
  'ACCION 1': string | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ default: true })
  COMPARTIR: boolean;

  @Column({ nullable: true })
  TEXTO: string | null;

  @Column({ name: 'ACCION 3', nullable: true })
  'ACCION 3': string | null;

  @Column({ nullable: true })
  CLIENTE: string | null;

  @Column({ name: 'VALOR INACTIVO', nullable: true })
  'VALOR INACTIVO': number | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ name: 'LISTA DESEOS', nullable: true })
  'LISTA DESEOS': string | null;

  @Column({ nullable: true })
  SUBTITULO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  TITULO: string | null;

  @Column({ name: 'VALOR PROMO', nullable: true })
  'VALOR PROMO': number | null;

  @Column({ name: 'ACCION 2', nullable: true })
  'ACCION 2': string | null;

  @Column({ nullable: true })
  SUBCATEGORIA: string | null;

  @Column({ name: 'LISTA PEDIDO', nullable: true })
  'LISTA PEDIDO': string | null;

  @Column({ nullable: true })
  COMPONENTES: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'ID PLANTILLA', nullable: true })
  'ID PLANTILLA': string | null;

  @Column({ name: 'IMAGEN PROMO', nullable: true })
  'IMAGEN PROMO': string | null;
}
