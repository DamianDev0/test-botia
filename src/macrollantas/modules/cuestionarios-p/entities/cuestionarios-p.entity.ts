import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CUESTIONARIOS_P')
export class CuestionariosP extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  instructor: string | null;

  @Column({ nullable: true })
  pregunta: string | null;

  @Column({ nullable: true })
  meGusta: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  idCategoria: string | null;

  @Column({ nullable: true })
  tipoCalificacion: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  alcance: string | null;

  @Column({ nullable: true })
  urlFoto: string | null;

  @Column({ nullable: true })
  contenido: string | null;

  @Column({ nullable: true })
  opciones: string | null;

  @Column({ nullable: true })
  idSubcategoria: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  respuesta: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  fechaPregunta: Date | null;

  @Column({ nullable: true })
  idSucursal: string | null;
}
