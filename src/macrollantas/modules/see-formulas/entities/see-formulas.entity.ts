import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_formulas')
export class SeeFormulas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  factor: number | null;

  @Column({ nullable: true })
  idVariable2: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  formula: string | null;

  @Column({ nullable: true })
  operador: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  idVariable1: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  variable: string | null;
}
