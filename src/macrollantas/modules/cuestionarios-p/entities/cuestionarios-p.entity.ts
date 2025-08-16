import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CUESTIONARIOS_P')
export class CuestionariosP extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  id_empresa: string | null;

  @Column({ nullable: true })
  instructor: string | null;

  @Column({ nullable: true })
  pregunta: string | null;

  @Column({ nullable: true })
  me_gusta: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id_categoria: string | null;

  @Column({ nullable: true })
  tipo_calificacion: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  alcance: string | null;

  @Column({ nullable: true })
  url_foto: string | null;

  @Column({ nullable: true })
  contenido: string | null;

  @Column({ nullable: true })
  opciones: string | null;

  @Column({ nullable: true })
  id_subcategoria: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  respuesta: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  fecha_pregunta: Date | null;

  @Column({ nullable: true })
  id_sucursal: string | null;
}
