import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ZONAS')
export class Zonas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  zona: string | null;
}
