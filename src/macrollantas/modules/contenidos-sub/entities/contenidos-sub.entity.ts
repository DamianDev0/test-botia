import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_SUB')
export class ContenidosSub extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  numSubcapitulo: number | null;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  nomTitulo: string | null;

  @Column({ nullable: true })
  idContenidoCap: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  numClases: number | null;

  @Column({ nullable: true })
  numDuracion: number | null;
}
