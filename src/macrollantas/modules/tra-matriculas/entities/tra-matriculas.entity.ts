import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas')
export class TraMatriculas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ nullable: true })
  ENTRADA: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ name: 'NUMERO DOCTO', nullable: true })
  'NUMERO DOCTO': string | null;

  @Column({ name: 'TIPO DOCTO', nullable: true })
  'TIPO DOCTO': string | null;

  @Column({ nullable: true })
  SUBCATEGORIA: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;

  @Column({ nullable: true })
  NIT: string | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  CONCEPTO: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  REMISION: string | null;

  @Column({ nullable: true })
  FACTURA: string | null;
}
