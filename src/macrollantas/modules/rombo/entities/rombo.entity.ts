import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rombo')
export class Rombo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  hora: string | null;

  @Column({ nullable: true })
  rombo: string | null;

  @Column({ nullable: true })
  idMovimiento: string | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
