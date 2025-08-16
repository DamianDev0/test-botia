import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VERSIONES')
export class Versiones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  VIDEO: string | null;

  @Column({ nullable: true })
  AUTOR: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  VERSION: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  CARACTERISTICA: string | null;

  @Column({ nullable: true })
  FOTO: string | null;
}
