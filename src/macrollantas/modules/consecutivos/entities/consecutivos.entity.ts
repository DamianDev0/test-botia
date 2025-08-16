import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consecutivos')
export class Consecutivos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'S-NOMBRE', nullable: true })
  'S-NOMBRE': string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  NUMERO: number | null;

  @Column({ nullable: true })
  DOCUMENTO: string | null;
}
