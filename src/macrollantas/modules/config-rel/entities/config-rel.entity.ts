import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG REL')
export class ConfigRel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  alto: number | null;

  @Column({ nullable: true })
  fechaInicial: Date | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  colorFondo: string | null;

  @Column({ nullable: true })
  idRecurso: string | null;

  @Column({ nullable: true })
  sizeFont: number | null;

  @Column({ nullable: true })
  idRelacionado: string | null;

  @Column({ nullable: true })
  fechaFinal: Date | null;

  @Column({ nullable: true })
  ancho: number | null;

  @Column({ nullable: true })
  posicion: string | null;

  @Column({ nullable: true })
  colorLetra: string | null;
}
