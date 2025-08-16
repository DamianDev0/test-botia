import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CUESTIONARIOS')
export class Cuestionarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  fecha_respuesta: Date | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ default: true })
  denunciar: boolean;

  @Column({ nullable: true })
  instructor: string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ nullable: true })
  respuesta: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  calificacion: number | null;

  @Column({ nullable: true })
  contenido: string | null;

  @Column({ nullable: true })
  url_foto: string | null;

  @Column({ nullable: true })
  fecha_pregunta: Date | null;

  @Column({ nullable: true })
  opciones: string | null;

  @Column({ nullable: true })
  tipo_calificacion: string | null;

  @Column({ nullable: true })
  pregunta: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  url_video: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  alcance: string | null;

  @Column({ default: true })
  megusta: boolean;
}
