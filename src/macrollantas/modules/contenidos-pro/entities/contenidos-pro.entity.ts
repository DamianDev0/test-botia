import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_PRO')
export class ContenidosPro extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  idContenidoSub: string | null;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  idContenidoRec: string | null;

  @Column({ nullable: true })
  idSucursal: string | null;

  @Column({ nullable: true })
  idUsuario: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  numAvance: number | null;

  @Column({ nullable: true })
  numFinal: number | null;

  @Column({ nullable: true })
  numInicial: number | null;
}
