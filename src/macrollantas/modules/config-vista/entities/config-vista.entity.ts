import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG VISTA')
export class ConfigVista extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ANCHO: number | null;

  @Column({ name: 'NUMERO FILAS', nullable: true })
  'NUMERO FILAS': number | null;

  @Column({ name: 'NUMERO COLUMNAS', nullable: true })
  'NUMERO COLUMNAS': number | null;

  @Column({ nullable: true })
  CONTAINER: string | null;

  @Column({ nullable: true })
  RADIUS: number | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ default: true })
  VISIBLE: boolean;

  @Column({ name: 'BORDER SIZE', nullable: true })
  'BORDER SIZE': number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  ALTO: number | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ name: 'BORDER COLOR', nullable: true })
  'BORDER COLOR': string | null;

  @Column({ default: true })
  BORDER: boolean;

  @Column({ nullable: true })
  DOCUMENTO: string | null;

  @Column({ nullable: true })
  ORIENTACION: string | null;

  @Column({ nullable: true })
  COLOR: string | null;

  @Column({ name: 'TIPO APP', nullable: true })
  'TIPO APP': string | null;
}
