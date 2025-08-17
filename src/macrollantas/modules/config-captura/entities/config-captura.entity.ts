import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG CAPTURA')
export class ConfigCaptura extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  documento: string | null;

  @Column({ nullable: true })
  key: string | null;

  @Column({ nullable: true })
  componente: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ name: 'MANEJA KEY', default: true })
  manejaKey: boolean;

  @Column({ nullable: true })
  empresa: string | null;
}
