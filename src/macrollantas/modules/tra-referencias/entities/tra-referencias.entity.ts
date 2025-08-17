import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_referencias')
export class TraReferencias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  tipo: string | null;
}
