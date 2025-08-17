import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_partes')
export class TraPartes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  parte: string | null;
}
