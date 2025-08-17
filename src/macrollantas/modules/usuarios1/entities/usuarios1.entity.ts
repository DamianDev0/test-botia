import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios1')
export class Usuarios1 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'CANTIDAD ESCANEADA', nullable: true })
  'CANTIDAD ESCANEADA': number | null;

  @Column({ nullable: true })
  columna: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  area: string | null;

  @Column({ nullable: true })
  ubicacion: string | null;

  @Column({ nullable: true })
  nivel: number | null;

  @Column({ nullable: true })
  fila: number | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  fecha: string | null;

  @Column({ name: 'CANTIDAD FISICA', nullable: true })
  'CANTIDAD FISICA': number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  bodega: string | null;
}
