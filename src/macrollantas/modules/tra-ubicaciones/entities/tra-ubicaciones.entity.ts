import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_ubicaciones')
export class TraUbicaciones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  bodega: string | null;

  @Column({ name: 'CANTIDAD ESCANEADA', nullable: true })
  'CANTIDAD ESCANEADA': number | null;

  @Column({ nullable: true })
  ubicacion: string | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ name: 'CANTIDAD FISICA', nullable: true })
  'CANTIDAD FISICA': number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  fila: number | null;

  @Column({ nullable: true })
  area: string | null;

  @Column({ nullable: true })
  columna: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  nivel: string | null;
}
