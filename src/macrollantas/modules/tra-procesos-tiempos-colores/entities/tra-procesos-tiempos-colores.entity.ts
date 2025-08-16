import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos_tiempos_colores')
export class TraProcesosTiemposColores extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  TIPO_NICHO: string | null;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  cod_color: string | null;

  @Column({ nullable: true })
  val_porcentaje1: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  num_orden: number | null;

  @Column({ nullable: true })
  cod_rgb: string | null;

  @Column({ nullable: true })
  val_porcentaje2: number | null;
}
