import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VERSIONES')
export class Versiones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  video: string | null;

  @Column({ nullable: true })
  autor: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  version: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  caracteristica: string | null;

  @Column({ nullable: true })
  foto: string | null;
}
