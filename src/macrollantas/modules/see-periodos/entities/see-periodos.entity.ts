import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_periodos')
export class SeePeriodos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  periodo: string | null;

  @Column({ nullable: true })
  frecuencia: string | null;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  medida: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  variable: string | null;
}
