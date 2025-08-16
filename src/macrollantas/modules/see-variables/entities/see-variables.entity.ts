import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_variables')
export class SeeVariables extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  AREA: string | null;

  @Column({ name: 'UNIDAD MEDIDA', nullable: true })
  'UNIDAD MEDIDA': string | null;

  @Column({ nullable: true })
  VARIABLE: string | null;

  @Column({ nullable: true })
  URL: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ name: 'TIPO INGRESO', nullable: true })
  'TIPO INGRESO': string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;
}
