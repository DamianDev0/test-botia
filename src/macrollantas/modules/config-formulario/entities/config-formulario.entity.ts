import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG FORMULARIO')
export class ConfigFormulario extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ default: true })
  EDITABLE: boolean;

  @Column({ nullable: true })
  FORMATO: string | null;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  'VALOR INICIAL': string | null;

  @Column({ nullable: true })
  VISTA: string | null;

  @Column({ nullable: true })
  TABLA: string | null;

  @Column({ default: true })
  ESCANEAR: boolean;

  @Column({ nullable: true })
  MINIMO: number | null;

  @Column({ nullable: true })
  FORMULA: string | null;

  @Column({ default: true })
  REQUERIDO: boolean;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ name: 'BASE DATOS', nullable: true })
  'BASE DATOS': string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ name: 'TIPO DATO', nullable: true })
  'TIPO DATO': string | null;

  @Column({ nullable: true })
  MAXIMO: number | null;

  @Column({ nullable: true })
  CAMPO: string | null;

  @Column({ default: true })
  VISIBLE: boolean;

  @Column({ default: true })
  CLAVE: boolean;
}
