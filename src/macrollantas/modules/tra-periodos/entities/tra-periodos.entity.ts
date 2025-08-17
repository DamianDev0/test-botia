import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_periodos')
export class TraPeriodos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  AÑO: number | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  mes: number | null;

  @Column({ nullable: true })
  periodo: string | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
