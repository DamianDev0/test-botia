import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grupos_usuarios')
export class GruposUsuarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  grupo: string | null;

  @Column({ nullable: true })
  INVENTARIOS: number | null;

  @Column({ nullable: true })
  administrador: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ nullable: true })
  TODASBODEGAS: number | null;

  @Column({ nullable: true })
  PERMISOCREDITO: number | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  ObligarFechaCalendario: number | null;

  @Column({ nullable: true })
  perfil: number | null;
}
