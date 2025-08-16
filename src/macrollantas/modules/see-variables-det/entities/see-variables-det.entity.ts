import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_variables_det')
export class SeeVariablesDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  FRECUENCIA: string | null;

  @Column({ nullable: true })
  VALOR: number | null;

  @Column({ nullable: true })
  VARIABLE: string | null;

  @Column({ nullable: true })
  PERIODO: string | null;
}
