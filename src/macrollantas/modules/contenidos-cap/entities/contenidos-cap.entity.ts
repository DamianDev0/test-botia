import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_CAP')
export class ContenidosCap extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  numDuracion: number | null;

  @Column({ nullable: true })
  indEstado: string | null;

  @Column({ nullable: true })
  nomTitulo: string | null;

  @Column({ nullable: true })
  numCapitulo: number | null;

  @Column({ nullable: true })
  numClases: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  idContenido: string | null;
}
