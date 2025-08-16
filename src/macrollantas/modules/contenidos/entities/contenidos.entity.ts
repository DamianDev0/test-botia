import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS')
export class Contenidos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  num_visitas: number | null;

  @Column({ nullable: true })
  num_calificaciones: number | null;

  @Column({ nullable: true })
  val_costo_anterior: number | null;

  @Column({ nullable: true })
  num_ventas: number | null;

  @Column({ nullable: true })
  num_capitulos: number | null;

  @Column({ nullable: true })
  val_costo: number | null;

  @Column({ nullable: true })
  num_nivel: number | null;

  @Column({ nullable: true })
  id_usuario: string | null;

  @Column({ nullable: true })
  url_audio: string | null;

  @Column({ nullable: true })
  nom_idioma: string | null;

  @Column({ nullable: true })
  url_foto: string | null;

  @Column({ nullable: true })
  fec_creacion: Date | null;

  @Column({ nullable: true })
  num_cal_promedio: number | null;

  @Column({ nullable: true })
  num_duracion: number | null;

  @Column({ nullable: true })
  nom_traduccion: string | null;

  @Column({ nullable: true })
  num_estudiantes: number | null;

  @Column({ nullable: true })
  fec_actualizacion: Date | null;

  @Column({ nullable: true })
  url_video: string | null;

  @Column({ nullable: true })
  nom_subtitulo: string | null;

  @Column({ nullable: true })
  nom_titulo: string | null;

  @Column({ nullable: true })
  id_categoria: string | null;

  @Column({ nullable: true })
  id_subcategoria: string | null;

  @Column({ nullable: true })
  fec_publicacion: Date | null;

  @Column({ nullable: true })
  url_texto: string | null;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  id: string | null;
}
