import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Clientes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  telefono: string | null;

  @Column({ nullable: true })
  fecha: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ name: 'NIT ASOCIADO', nullable: true })
  'NIT ASOCIADO': number | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  sexo: string | null;

  @Column({ nullable: true })
  nit: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  qr: string | null;
}
