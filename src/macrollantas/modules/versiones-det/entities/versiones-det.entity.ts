import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VERSIONES DET')
export class VersionesDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  VIDEO: string | null;

  @Column({ nullable: true })
  FOTO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ name: 'ID VERSION', nullable: true })
  'ID VERSION': string | null;

  @Column({ nullable: true })
  CARACTERISTICA: string | null;

  @Column({ nullable: true })
  AUTOR: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;
}
