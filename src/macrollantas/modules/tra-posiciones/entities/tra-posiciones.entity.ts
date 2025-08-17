import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_posiciones')
export class TraPosiciones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  posicion: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  id: string | null;
}
