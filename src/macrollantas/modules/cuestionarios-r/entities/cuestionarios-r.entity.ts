import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CUESTIONARIOS_R')
export class CuestionariosR extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  id_sucursal: string | null;

  @Column({ nullable: true })
  id_empresa: string | null;

  @Column({ nullable: true })
  id_pregunta: string | null;

  @Column({ default: true })
  resultado: boolean;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id_usuario: string | null;

  @Column({ default: true })
  me_gusta: boolean;

  @Column({ nullable: true })
  calificación: number | null;

  @Column({ nullable: true })
  fecha_respuesta: Date | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  intento: number | null;

  @Column({ default: true })
  denunciar: boolean;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  url_foto: string | null;

  @Column({ nullable: true })
  respuesta: string | null;
}
