import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG CABEZA')
export class ConfigCabeza extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  DOCUMENTO: string | null;

  @Column({ nullable: true })
  KEY: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;

  @Column({ nullable: true })
  APP: string | null;

  @Column({ name: 'MANEJA KEY', default: true })
  MANEJA_KEY: boolean;

  @Column({ nullable: true })
  ID: string | null;
}
