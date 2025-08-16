import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG REL')
export class ConfigRel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  alto: number | null;

  @Column({ nullable: true })
  fecha_inicial: Date | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  color_fondo: string | null;

  @Column({ nullable: true })
  id_recurso: string | null;

  @Column({ nullable: true })
  size_font: number | null;

  @Column({ nullable: true })
  id_relacionado: string | null;

  @Column({ nullable: true })
  fecha_final: Date | null;

  @Column({ nullable: true })
  ancho: number | null;

  @Column({ nullable: true })
  posicion: string | null;

  @Column({ nullable: true })
  color_letra: string | null;
}
