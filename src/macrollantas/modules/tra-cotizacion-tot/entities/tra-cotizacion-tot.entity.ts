import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_cotizacion_tot')
export class TraCotizacionTot extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ name: 'CONCEPTO CONTABLE', nullable: true })
  'CONCEPTO CONTABLE': string | null;

  @Column({ nullable: true })
  total: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  idTraCotizacion: string | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ nullable: true })
  numero: string | null;
}
