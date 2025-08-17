import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MERCADO')
export class Mercado extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  ususario: string | null;

  @Column({ nullable: true })
  numero: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  lote: string | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ nullable: true })
  factura: string | null;

  @Column({ nullable: true })
  fecha: Date | null;
}
