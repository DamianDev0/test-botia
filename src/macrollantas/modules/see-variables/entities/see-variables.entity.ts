import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_variables')
export class SeeVariables extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  area: string | null;

  @Column({ name: 'UNIDAD MEDIDA', nullable: true })
  'UNIDAD MEDIDA': string | null;

  @Column({ nullable: true })
  variable: string | null;

  @Column({ nullable: true })
  url: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ name: 'TIPO INGRESO', nullable: true })
  'TIPO INGRESO': string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
