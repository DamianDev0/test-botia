import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG UBICACION')
export class ConfigUbicacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  CAMPO: string | null;

  @Column({ nullable: true })
  LONGITUD: number | null;
}
