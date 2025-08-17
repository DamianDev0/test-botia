import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tecnicos')
export class Tecnicos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  iniciales: string | null;

  @Column({ nullable: true })
  servicios: string | null;

  @Column({ nullable: true })
  nombre: string | null;
}
