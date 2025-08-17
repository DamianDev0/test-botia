import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('susuarios')
export class Susuarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  vendedor: string | null;

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
  claveAcce: string | null;

  @Column({ nullable: true })
  group: string | null;

  @Column({ nullable: true })
  rutaFoto: string | null;

  @Column({ nullable: true })
  activo: number | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
