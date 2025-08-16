import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG KARDEX')
export class ConfigKardex extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ default: true })
  MULTISELECCION: boolean;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  TITULO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ default: true })
  VER: boolean;

  @Column({ default: true })
  DESCRIPCION: boolean;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'VALOR POR DEFECTO', nullable: true })
  'VALOR POR DEFECTO': string | null;

  @Column({ nullable: true })
  TABLA: string | null;
}
