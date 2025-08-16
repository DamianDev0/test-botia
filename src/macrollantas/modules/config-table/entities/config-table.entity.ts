import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG TABLE')
export class ConfigTable extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  DATABASE: string | null;

  @Column({ nullable: true })
  TABLA: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;
}
