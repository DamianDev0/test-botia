import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('NICHOS')
export class Nichos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  nicho: string | null;
}
