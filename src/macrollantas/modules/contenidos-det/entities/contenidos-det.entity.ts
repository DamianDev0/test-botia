import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_DET')
export class ContenidosDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  indTipo: string | null;

  @Column({ nullable: true })
  idContenido: string | null;

  @Column({ nullable: true })
  codSucursal: string | null;

  @Column({ nullable: true })
  numOrden: number | null;

  @Column({ nullable: true })
  nomCaracteristica: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  indEstado: string | null;
}
