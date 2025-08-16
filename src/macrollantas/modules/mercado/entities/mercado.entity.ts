import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MERCADO')
export class Mercado extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  NIT: string | null;

  @Column({ nullable: true })
  USUSARIO: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  LOTE: string | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ nullable: true })
  CONCEPTO: string | null;

  @Column({ nullable: true })
  FACTURA: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;
}
