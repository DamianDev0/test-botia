import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRESUPUESTOS')
export class Presupuestos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ name: 'HORA FIN', nullable: true })
  'HORA FIN': number | null;

  @Column({ name: 'TOTAL HORAS', nullable: true })
  'TOTAL HORAS': number | null;

  @Column({ name: 'PTO HORA', nullable: true })
  'PTO HORA': number | null;

  @Column({ nullable: true })
  PROCESO: string | null;

  @Column({ nullable: true })
  TEMPORADA: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'NUMERO DIA', nullable: true })
  'NUMERO DIA': number | null;

  @Column({ name: 'PTO DIA', nullable: true })
  'PTO DIA': number | null;

  @Column({ name: 'HORA INICIO', nullable: true })
  'HORA INICIO': number | null;

  @Column({ nullable: true })
  ESTADO: string | null;
}
