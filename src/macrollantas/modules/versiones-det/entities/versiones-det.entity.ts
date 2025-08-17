import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VERSIONES DET')
export class VersionesDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  video: string | null;

  @Column({ nullable: true })
  foto: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ name: 'ID VERSION', nullable: true })
  'ID VERSION': string | null;

  @Column({ nullable: true })
  caracteristica: string | null;

  @Column({ nullable: true })
  autor: string | null;

  @Column({ nullable: true })
  orden: number | null;
}
