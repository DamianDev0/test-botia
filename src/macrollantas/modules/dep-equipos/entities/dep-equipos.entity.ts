import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DEP_EQUIPOS')
export class DepEquipos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ID_EMPRESA: string | null;

  @Column({ nullable: true })
  NUMERO: number | null;

  @Column({ nullable: true })
  TECNICO: string | null;

  @Column({ nullable: true })
  ID_SUCURSAL: string | null;

  @Column({ nullable: true })
  DELEGADO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  LOGO: string | null;

  @Column({ nullable: true })
  ID_NICHO: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  ID_EQUIPO: string | null;
}
