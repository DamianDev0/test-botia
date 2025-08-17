import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DEP_EQUIPOS')
export class DepEquipos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  numero: number | null;

  @Column({ nullable: true })
  tecnico: string | null;

  @Column({ nullable: true })
  idSucursal: string | null;

  @Column({ nullable: true })
  delegado: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  logo: string | null;

  @Column({ nullable: true })
  idNicho: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  idEquipo: string | null;
}
