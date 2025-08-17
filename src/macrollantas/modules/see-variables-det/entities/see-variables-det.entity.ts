import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_variables_det')
export class SeeVariablesDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  frecuencia: string | null;

  @Column({ nullable: true })
  valor: number | null;

  @Column({ nullable: true })
  variable: string | null;

  @Column({ nullable: true })
  periodo: string | null;
}
