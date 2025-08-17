import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('COLECCIONES')
export class COLECCIONES extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  coleccion: string | null;
}
