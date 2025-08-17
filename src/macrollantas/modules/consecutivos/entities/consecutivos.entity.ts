import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consecutivos')
export class Consecutivos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'S-NOMBRE', nullable: true })
  'S-NOMBRE': string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  numero: number | null;

  @Column({ nullable: true })
  documento: string | null;
}
