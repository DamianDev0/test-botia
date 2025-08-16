import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OREPARACION2_2000')
export class Oreparacion22000 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  FECHAINICIADO: Date | null;

  @Column({ nullable: true })
  ANULADO: number | null;

  @Column({ nullable: true })
  VALE: string | null;

  @Column({ nullable: true })
  CCOSTOS: string | null;

  @Column({ nullable: true })
  FECHATERMINADO: Date | null;

  @Column({ nullable: true })
  FACTURA: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  TIPOGOLPE: number | null;

  @Column({ nullable: true })
  VALOR: number | null;

  @Column({ nullable: true })
  TARIFAIVA: number | null;

  @Column({ nullable: true })
  NUMERO: string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  ENTREGADO: number | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  ASEGURADORA: number | null;

  @Column({ nullable: true })
  GENERICO: string | null;

  @Column({ nullable: true })
  VENDEDOR: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  IMPREVISTO: string | null;
}
