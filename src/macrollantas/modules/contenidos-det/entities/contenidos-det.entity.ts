import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_DET')
export class ContenidosDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  ind_tipo: string | null;

  @Column({ nullable: true })
  id_contenido: string | null;

  @Column({ nullable: true })
  cod_sucursal: string | null;

  @Column({ nullable: true })
  num_orden: number | null;

  @Column({ nullable: true })
  nom_caracteristica: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  ind_estado: string | null;
}
