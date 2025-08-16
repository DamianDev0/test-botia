import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_detalles')
export class TraDetalles extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  fec_proceso: Date | null;

  @Column({ nullable: true })
  num_total: number | null;

  @Column({ nullable: true })
  cod_sucursal: string | null;

  @Column({ nullable: true })
  tip_rombo: string | null;

  @Column({ nullable: true })
  cod_subgrupo: string | null;

  @Column({ nullable: true })
  num_nit: string | null;

  @Column({ nullable: true })
  nom_codigo: string | null;

  @Column({ nullable: true })
  fecha_final: string | null;

  @Column({ nullable: true })
  num_tiempo_proceso: number | null;

  @Column({ nullable: true })
  can_pedida: number | null;

  @Column({ nullable: true })
  num_tiempo_total: number | null;

  @Column({ nullable: true })
  fecha_inicial: Date | null;

  @Column({ nullable: true })
  cod_placa: string | null;

  @Column({ nullable: true })
  cod_grupo: string | null;

  @Column({ nullable: true })
  cod_email: string | null;

  @Column({ nullable: true })
  cod_evento: string | null;

  @Column({ nullable: true })
  cod_tecnico: string | null;

  @Column({ nullable: true })
  num_item: number | null;

  @Column({ nullable: true })
  cod_ubicacion_bodega: string | null;

  @Column({ nullable: true })
  nom_cliente: string | null;

  @Column({ nullable: true })
  num_rombo: string | null;

  @Column({ nullable: true })
  cod_proceso: string | null;

  @Column({ nullable: true })
  cod_ubicacion: string | null;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  cod_codigo: string | null;

  @Column({ nullable: true })
  can_despachada: number | null;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  can_existencia: number | null;
}
