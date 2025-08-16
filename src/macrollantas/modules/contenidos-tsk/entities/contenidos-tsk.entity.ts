import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_TSK')
export class ContenidosTsk extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  fec_inicial: Date | null;

  @Column({ nullable: true })
  id_empresa: string | null;

  @Column({ nullable: true })
  id_sucursal: string | null;

  @Column({ nullable: true })
  id_categoria: string | null;

  @Column({ nullable: true })
  id_contenido: string | null;

  @Column({ nullable: true })
  nom_nombre: string | null;

  @Column({ nullable: true })
  nom_alcance: string | null;

  @Column({ nullable: true })
  num_tiempo: number | null;

  @Column({ nullable: true })
  id_calendario: string | null;

  @Column({ nullable: true })
  cod_ubicacion: string | null;

  @Column({ nullable: true })
  nom_frecuencia: string | null;

  @Column({ nullable: true })
  cod_tipo: string | null;

  @Column({ nullable: true })
  id_subcategoria: string | null;

  @Column({ nullable: true })
  num_numero: number | null;

  @Column({ nullable: true })
  nom_pasos: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  id_ubicacion: string | null;

  @Column({ default: true })
  ind_recordacion: boolean;

  @Column({ nullable: true })
  ind_prioridad: string | null;

  @Column({ nullable: true })
  id_usuario: string | null;

  @Column({ nullable: true })
  id_concepto: string | null;

  @Column({ nullable: true })
  nom_notas: string | null;

  @Column({ nullable: true })
  nom_dias: string | null;

  @Column({ nullable: true })
  fec_final: Date | null;

  @Column({ nullable: true })
  ind_estado: string | null;
}
