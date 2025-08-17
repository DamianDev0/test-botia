import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos_tiempos_colores')
export class TraProcesosTiemposColores extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  tipoNicho: string | null;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  codColor: string | null;

  @Column({ nullable: true })
  valPorcentaje1: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  numOrden: number | null;

  @Column({ nullable: true })
  codRgb: string | null;

  @Column({ nullable: true })
  valPorcentaje2: number | null;
}
