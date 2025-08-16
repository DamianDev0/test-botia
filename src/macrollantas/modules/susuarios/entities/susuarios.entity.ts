import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('susuarios')
export class Susuarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  EMAIL: string | null;

  @Column({ nullable: true })
  VENDEDOR: string | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  accesoweb: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  vencimiento: Date | null;

  @Column({ nullable: true })
  clave_acce: string | null;

  @Column({ nullable: true })
  group: string | null;

  @Column({ nullable: true })
  ruta_foto: string | null;

  @Column({ nullable: true })
  activo: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;
}
