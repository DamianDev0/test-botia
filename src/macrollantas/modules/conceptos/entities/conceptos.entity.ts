import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('conceptos')
export class Conceptos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  conceptoc: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  documento: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ nullable: true })
  operacion: number | null;
}
