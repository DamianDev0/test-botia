import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos_tiempos')
export class TraProcesosTiempos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  tip_recurso: string | null;

  @Column({ nullable: true })
  nom_proceso: string | null;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  cod_medida: string | null;

  @Column({ nullable: true })
  cod_proceso: string | null;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  cod_codigo_proveedor: string | null;

  @Column({ nullable: true })
  num_tiempo: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  TIPO: string | null;
}
