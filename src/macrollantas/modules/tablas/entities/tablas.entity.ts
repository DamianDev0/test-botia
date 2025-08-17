import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TABLAS')
export class Tablas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  campo: string | null;

  @Column({ nullable: true })
  esquema: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ nullable: true })
  idNicho: string | null;

  @Column({ nullable: true })
  badeDatos: string | null;

  @Column({ nullable: true })
  idSucursal: string | null;

  @Column({ nullable: true })
  tipo: string | null;
}
