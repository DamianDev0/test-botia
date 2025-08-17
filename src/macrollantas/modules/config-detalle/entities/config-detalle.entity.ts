import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG DETALLE')
export class ConfigDetalle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'TIPO DATO', nullable: true })
  tipoDato: string | null;

  @Column({ nullable: true })
  formato: string | null;

  @Column({ nullable: true })
  location: string | null;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  valorInicial: string | null;

  @Column({ nullable: true })
  fila: number | null;

  @Column({ nullable: true })
  columna: number | null;

  @Column({ name: 'COLOR LETRA', nullable: true })
  colorLetra: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  campo: string | null;

  @Column({ nullable: true })
  radius: number | null;

  @Column({ name: 'TIPO LABEL', default: true })
  tipoLabel: boolean;

  @Column({ default: true })
  indice: boolean;

  @Column({ nullable: true })
  size: number | null;

  @Column({ nullable: true })
  documento: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  color: string | null;

  @Column({ default: true })
  container: boolean;

  @Column({ nullable: true })
  font: string | null;

  @Column({ default: true })
  requerido: boolean;

  @Column({ nullable: true })
  formula: string | null;

  @Column({ nullable: true })
  query: string | null;

  @Column({ nullable: true })
  accion: string | null;

  @Column({ nullable: true })
  componente: string | null;

  @Column({ nullable: true })
  height: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  ruta: string | null;

  @Column({ default: true })
  visible: boolean;

  @Column({ default: true })
  editable: boolean;
}
