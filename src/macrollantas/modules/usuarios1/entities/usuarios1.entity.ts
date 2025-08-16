import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios1')
export class Usuarios1 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'CANTIDAD ESCANEADA', nullable: true })
  'CANTIDAD ESCANEADA': number | null;

  @Column({ nullable: true })
  COLUMNA: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  AREA: string | null;

  @Column({ nullable: true })
  UBICACION: string | null;

  @Column({ nullable: true })
  NIVEL: number | null;

  @Column({ nullable: true })
  FILA: number | null;

  @Column({ nullable: true })
  USUARIO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  FECHA: string | null;

  @Column({ name: 'CANTIDAD FISICA', nullable: true })
  'CANTIDAD FISICA': number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  BODEGA: string | null;

  @Column({ nullable: true })
  ID: string | null;
}
