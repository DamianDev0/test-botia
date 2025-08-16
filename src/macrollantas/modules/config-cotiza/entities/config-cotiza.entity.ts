import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG COTIZA')
export class ConfigCotiza extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  TABLA: string | null;

  @Column({ default: true })
  VER: boolean;

  @Column({ nullable: true })
  ICONO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  TITULO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;
}
