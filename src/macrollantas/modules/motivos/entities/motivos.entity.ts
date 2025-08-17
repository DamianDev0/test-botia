import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivos')
export class Motivos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  orden: number | null;
}
