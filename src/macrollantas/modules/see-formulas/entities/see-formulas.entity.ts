import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_formulas')
export class SeeFormulas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  FACTOR: number | null;

  @Column({ nullable: true })
  ID_VARIABLE2: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  FORMULA: string | null;

  @Column({ nullable: true })
  OPERADOR: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  ID_VARIABLE1: string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  VARIABLE: string | null;
}
