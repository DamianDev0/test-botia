import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG TABLE')
export class ConfigTable extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  database: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
