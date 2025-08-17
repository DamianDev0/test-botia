import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos_tiempos')
export class TraProcesosTiempos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipRecurso: string | null;

  @Column({ nullable: true })
  nomProceso: string | null;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  codMedida: string | null;

  @Column({ nullable: true })
  codProceso: string | null;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  codCodigoProveedor: string | null;

  @Column({ nullable: true })
  numTiempo: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  tipo: string | null;
}
