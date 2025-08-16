import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehiculos')
export class Vehiculos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  telefonos: string | null;

  @Column({ nullable: true })
  NOMBRE1: string | null;

  @Column({ nullable: true })
  NOMBRE2: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  email: string | null;
}
