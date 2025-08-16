import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_SUB')
export class ContenidosSub extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  num_subcapitulo: number | null;

  @Column({ nullable: true })
  ind_estado: string | null;

  @Column({ nullable: true })
  nom_titulo: string | null;

  @Column({ nullable: true })
  id_contenido_cap: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  num_clases: number | null;

  @Column({ nullable: true })
  num_duracion: number | null;
}
