import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivos')
export class Motivos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;
}
