import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OREPARACION2_2000')
export class Oreparacion22000 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fechainiciado: Date | null;

  @Column({ nullable: true })
  anulado: number | null;

  @Column({ nullable: true })
  vale: string | null;

  @Column({ nullable: true })
  ccostos: string | null;

  @Column({ nullable: true })
  fechaterminado: Date | null;

  @Column({ nullable: true })
  factura: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  tipogolpe: number | null;

  @Column({ nullable: true })
  valor: number | null;

  @Column({ nullable: true })
  tarifaiva: number | null;

  @Column({ nullable: true })
  numero: string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  entregado: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  aseguradora: number | null;

  @Column({ nullable: true })
  generico: string | null;

  @Column({ nullable: true })
  vendedor: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  imprevisto: string | null;
}
