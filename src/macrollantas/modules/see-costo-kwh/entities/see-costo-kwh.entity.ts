import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_costo_kwh')
export class SeeCostoKwh extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  PERIODO: string | null;

  @Column({ nullable: true })
  COSTO: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ID: string | null;
}
