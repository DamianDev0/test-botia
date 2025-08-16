import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TABLAS')
export class Tablas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  ID_EMPRESA: string | null;

  @Column({ nullable: true })
  CAMPO: string | null;

  @Column({ nullable: true })
  ESQUEMA: string | null;

  @Column({ nullable: true })
  TABLA: string | null;

  @Column({ nullable: true })
  ID_NICHO: string | null;

  @Column({ nullable: true })
  BADE_DATOS: string | null;

  @Column({ nullable: true })
  ID_SUCURSAL: string | null;

  @Column({ nullable: true })
  TIPO: string | null;
}
