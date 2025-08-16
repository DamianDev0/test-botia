import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_USR')
export class ContenidosUsr extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  fec_fecha: Date | null;

  @Column({ nullable: true })
  id_contenido: string | null;

  @Column({ nullable: true })
  id_usuario: string | null;

  @Column({ nullable: true })
  cod_sucursal: string | null;

  @Column({ nullable: true })
  cod_empresa: string | null;
}
