import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_TSK')
export class ContenidosTsk extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fecInicial: Date | null;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  idSucursal: string | null;

  @Column({ nullable: true })
  idCategoria: string | null;

  @Column({ nullable: true })
  idContenido: string | null;

  @Column({ nullable: true })
  nomNombre: string | null;

  @Column({ nullable: true })
  nomAlcance: string | null;

  @Column({ nullable: true })
  numTiempo: number | null;

  @Column({ nullable: true })
  idCalendario: string | null;

  @Column({ nullable: true })
  codUbicacion: string | null;

  @Column({ nullable: true })
  nomFrecuencia: string | null;

  @Column({ nullable: true })
  codTipo: string | null;

  @Column({ nullable: true })
  idSubcategoria: string | null;

  @Column({ nullable: true })
  numNumero: number | null;

  @Column({ nullable: true })
  nomPasos: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  idUbicacion: string | null;

  @Column({ default: true })
  indRecordacion: boolean;

  @Column({ nullable: true })
  indPrioridad: string | null;

  @Column({ nullable: true })
  idUsuario: string | null;

  @Column({ nullable: true })
  idConcepto: string | null;

  @Column({ nullable: true })
  nomNotas: string | null;

  @Column({ nullable: true })
  nomDias: string | null;

  @Column({ nullable: true })
  fecFinal: Date | null;

  @Column({ nullable: true })
  indEstado: string | null;
}
