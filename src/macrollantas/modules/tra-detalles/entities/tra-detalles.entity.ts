import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_detalles')
export class TraDetalles extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fecProceso: Date | null;

  @Column({ nullable: true })
  numTotal: number | null;

  @Column({ nullable: true })
  codSucursal: string | null;

  @Column({ nullable: true })
  tipRombo: string | null;

  @Column({ nullable: true })
  codSubgrupo: string | null;

  @Column({ nullable: true })
  numNit: string | null;

  @Column({ nullable: true })
  nomCodigo: string | null;

  @Column({ nullable: true })
  fechaFinal: string | null;

  @Column({ nullable: true })
  numTiempoProceso: number | null;

  @Column({ nullable: true })
  canPedida: number | null;

  @Column({ nullable: true })
  numTiempoTotal: number | null;

  @Column({ nullable: true })
  fechaInicial: Date | null;

  @Column({ nullable: true })
  codPlaca: string | null;

  @Column({ nullable: true })
  codGrupo: string | null;

  @Column({ nullable: true })
  codEmail: string | null;

  @Column({ nullable: true })
  codEvento: string | null;

  @Column({ nullable: true })
  codTecnico: string | null;

  @Column({ nullable: true })
  numItem: number | null;

  @Column({ nullable: true })
  codUbicacionBodega: string | null;

  @Column({ nullable: true })
  nomCliente: string | null;

  @Column({ nullable: true })
  numRombo: string | null;

  @Column({ nullable: true })
  codProceso: string | null;

  @Column({ nullable: true })
  codUbicacion: string | null;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  codCodigo: string | null;

  @Column({ nullable: true })
  canDespachada: number | null;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  canExistencia: number | null;
}
