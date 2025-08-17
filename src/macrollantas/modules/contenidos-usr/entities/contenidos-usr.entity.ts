import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_USR')
export class ContenidosUsr extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  fecFecha: Date | null;

  @Column({ nullable: true })
  idContenido: string | null;

  @Column({ nullable: true })
  idUsuario: string | null;

  @Column({ nullable: true })
  codSucursal: string | null;

  @Column({ nullable: true })
  codEmpresa: string | null;
}
