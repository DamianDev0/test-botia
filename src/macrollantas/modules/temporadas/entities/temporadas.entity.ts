import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TEMPORADAS')
export class Temporadas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'FECHA FINAL', nullable: true })
  'FECHA FINAL': Date | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ name: 'FECHA INICIAL', nullable: true })
  'FECHA INICIAL': Date | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  TEMPORADA: string | null;
}
