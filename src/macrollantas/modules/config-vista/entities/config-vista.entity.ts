import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG VISTA')
export class ConfigVista extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  ancho: number | null;

  @Column({ name: 'NUMERO FILAS', nullable: true })
  'NUMERO FILAS': number | null;

  @Column({ name: 'NUMERO COLUMNAS', nullable: true })
  'NUMERO COLUMNAS': number | null;

  @Column({ nullable: true })
  container: string | null;

  @Column({ nullable: true })
  radius: number | null;

  @Column({ nullable: true })
  componente: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ default: true })
  visible: boolean;

  @Column({ name: 'BORDER SIZE', nullable: true })
  'BORDER SIZE': number | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  alto: number | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ name: 'BORDER COLOR', nullable: true })
  'BORDER COLOR': string | null;

  @Column({ default: true })
  border: boolean;

  @Column({ nullable: true })
  documento: string | null;

  @Column({ nullable: true })
  orientacion: string | null;

  @Column({ nullable: true })
  color: string | null;

  @Column({ name: 'TIPO APP', nullable: true })
  'TIPO APP': string | null;
}
