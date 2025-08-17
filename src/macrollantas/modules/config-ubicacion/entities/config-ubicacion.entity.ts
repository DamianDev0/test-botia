import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG UBICACION')
export class ConfigUbicacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  campo: string | null;

  @Column({ nullable: true })
  longitud: number | null;
}
