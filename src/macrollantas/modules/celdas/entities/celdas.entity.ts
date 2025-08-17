import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celdas')
export class Celdas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  celda: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ name: 'EMPRESA ', nullable: true })
  'EMPRESA ': string | null;

  @Column({ nullable: true })
  estado: string | null;
}
