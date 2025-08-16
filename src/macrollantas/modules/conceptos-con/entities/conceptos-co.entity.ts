import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('conceptoscon')
export class ConceptosCon extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ type: 'numeric', nullable: true })
  TOPE2: number | null;

  @Column({ type: 'numeric', nullable: true })
  PORCENTAJE: number | null;

  @Column({ name: 'CONCEPTO CON', nullable: true })
  'CONCEPTO CON': string | null;

  @Column({ nullable: true })
  CUENTA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'TIPO DOCUMENTO', nullable: true })
  'TIPO DOCUMENTO': string | null;

  @Column({ nullable: true })
  TIPOV: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ type: 'numeric', nullable: true })
  ORDEN: number | null;

  @Column({ type: 'numeric', nullable: true })
  TOPE1: number | null;
}
