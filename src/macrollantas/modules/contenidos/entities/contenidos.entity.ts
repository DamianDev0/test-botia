import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS')
export class Contenidos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  numVisitas: number | null;

  @Column({ nullable: true })
  numCalificaciones: number | null;

  @Column({ nullable: true })
  valCostoAnterior: number | null;

  @Column({ nullable: true })
  numVentas: number | null;

  @Column({ nullable: true })
  numCapitulos: number | null;

  @Column({ nullable: true })
  valCosto: number | null;

  @Column({ nullable: true })
  numNivel: number | null;

  @Column({ nullable: true })
  idUsuario: string | null;

  @Column({ nullable: true })
  urlAudio: string | null;

  @Column({ nullable: true })
  nomIdioma: string | null;

  @Column({ nullable: true })
  urlFoto: string | null;

  @Column({ nullable: true })
  fecCreacion: Date | null;

  @Column({ nullable: true })
  numCalPromedio: number | null;

  @Column({ nullable: true })
  numDuracion: number | null;

  @Column({ nullable: true })
  nomTraduccion: string | null;

  @Column({ nullable: true })
  numEstudiantes: number | null;

  @Column({ nullable: true })
  fecActualizacion: Date | null;

  @Column({ nullable: true })
  urlVideo: string | null;

  @Column({ nullable: true })
  nomSubtitulo: string | null;

  @Column({ nullable: true })
  nomTitulo: string | null;

  @Column({ nullable: true })
  idCategoria: string | null;

  @Column({ nullable: true })
  idSubcategoria: string | null;

  @Column({ nullable: true })
  fecPublicacion: Date | null;

  @Column({ nullable: true })
  urlTexto: string | null;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  id: string | null;
}
