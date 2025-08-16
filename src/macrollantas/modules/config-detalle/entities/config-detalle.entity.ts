import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG DETALLE')
export class ConfigDetalle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'TIPO DATO', nullable: true })
  tipoDato: string | null;

  @Column({ nullable: true })
  FORMATO: string | null;

  @Column({ nullable: true })
  LOCATION: string | null;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  valorInicial: string | null;

  @Column({ nullable: true })
  FILA: number | null;

  @Column({ nullable: true })
  COLUMNA: number | null;

  @Column({ name: 'COLOR LETRA', nullable: true })
  colorLetra: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  CAMPO: string | null;

  @Column({ nullable: true })
  RADIUS: number | null;

  @Column({ name: 'TIPO LABEL', default: true })
  tipoLabel: boolean;

  @Column({ default: true })
  INDICE: boolean;

  @Column({ nullable: true })
  SIZE: number | null;

  @Column({ nullable: true })
  DOCUMENTO: string | null;

  @Column({ nullable: true })
  TABLA: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  COLOR: string | null;

  @Column({ default: true })
  CONTAINER: boolean;

  @Column({ nullable: true })
  FONT: string | null;

  @Column({ default: true })
  REQUERIDO: boolean;

  @Column({ nullable: true })
  FORMULA: string | null;

  @Column({ nullable: true })
  QUERY: string | null;

  @Column({ nullable: true })
  ACCION: string | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;

  @Column({ nullable: true })
  HEIGHT: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  RUTA: string | null;

  @Column({ default: true })
  VISIBLE: boolean;

  @Column({ default: true })
  EDITABLE: boolean;
}
