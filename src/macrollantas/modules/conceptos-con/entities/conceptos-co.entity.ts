import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('conceptoscon')
export class ConceptosCon extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ type: 'numeric', nullable: true })
  tope2: number | null;

  @Column({ type: 'numeric', nullable: true })
  porcentaje: number | null;

  @Column({ name: 'CONCEPTO CON', nullable: true })
  'CONCEPTO CON': string | null;

  @Column({ nullable: true })
  cuenta: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'TIPO DOCUMENTO', nullable: true })
  'TIPO DOCUMENTO': string | null;

  @Column({ nullable: true })
  tipov: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ type: 'numeric', nullable: true })
  orden: number | null;

  @Column({ type: 'numeric', nullable: true })
  tope1: number | null;
}
