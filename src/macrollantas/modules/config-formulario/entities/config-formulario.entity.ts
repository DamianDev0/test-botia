import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG FORMULARIO')
export class ConfigFormulario extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ default: true })
  editable: boolean;

  @Column({ nullable: true })
  formato: string | null;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  'VALOR INICIAL': string | null;

  @Column({ nullable: true })
  vista: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ default: true })
  escanear: boolean;

  @Column({ nullable: true })
  minimo: number | null;

  @Column({ nullable: true })
  formula: string | null;

  @Column({ default: true })
  requerido: boolean;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ name: 'BASE DATOS', nullable: true })
  'BASE DATOS': string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ name: 'TIPO DATO', nullable: true })
  'TIPO DATO': string | null;

  @Column({ nullable: true })
  maximo: number | null;

  @Column({ nullable: true })
  campo: string | null;

  @Column({ default: true })
  visible: boolean;

  @Column({ default: true })
  clave: boolean;
}
