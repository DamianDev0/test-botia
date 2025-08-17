import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas')
export class TraMatriculas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  entrada: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ name: 'NUMERO DOCTO', nullable: true })
  'NUMERO DOCTO': string | null;

  @Column({ name: 'TIPO DOCTO', nullable: true })
  'TIPO DOCTO': string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  numero: string | null;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  remision: string | null;

  @Column({ nullable: true })
  factura: string | null;
}
