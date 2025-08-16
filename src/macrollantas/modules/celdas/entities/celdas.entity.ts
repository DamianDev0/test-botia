import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celdas')
export class Celdas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  CELDA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  PLACA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ name: 'EMPRESA ', nullable: true })
  'EMPRESA ': string | null;

  @Column({ nullable: true })
  ESTADO: string | null;
}
