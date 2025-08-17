import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_REC')
export class ContenidosRec extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  contenido: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  formato: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  formulario: string | null;

  @Column({ default: true })
  descargar: boolean;

  @Column({ nullable: true })
  idRol: string | null;

  @Column({ nullable: true })
  urlRecurso: string | null;

  @Column({ nullable: true })
  origen: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  alcance: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ default: true })
  requerido: boolean;

  @Column({ nullable: true })
  idUsuario: string | null;
}
