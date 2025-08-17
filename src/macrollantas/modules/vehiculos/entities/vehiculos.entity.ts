import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehiculos')
export class Vehiculos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  telefonos: string | null;

  @Column({ nullable: true })
  nombre1: string | null;

  @Column({ nullable: true })
  nombre2: string | null;

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
