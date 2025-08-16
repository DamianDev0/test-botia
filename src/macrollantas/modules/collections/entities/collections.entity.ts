import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('COLECCIONES')
export class COLECCIONES extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  COLECCION: string | null;
}
