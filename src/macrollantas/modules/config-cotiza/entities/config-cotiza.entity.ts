import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG COTIZA')
export class ConfigCotiza extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ default: true })
  ver: boolean;

  @Column({ nullable: true })
  icono: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  orden: number | null;
}
