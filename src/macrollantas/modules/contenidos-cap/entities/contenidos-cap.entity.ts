import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_CAP')
export class ContenidosCap extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  num_duracion: number | null;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  nom_titulo: string | null;

  @Column({ nullable: true })
  num_capitulo: number | null;

  @Column({ nullable: true })
  num_clases: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  id_contenido: string | null;
}
