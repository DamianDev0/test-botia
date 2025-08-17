import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG DOCUMENTO')
export class ConfigDocumento extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  fila: number | null;

  @Column({ nullable: true })
  vista: string | null;

  @Column({ nullable: true })
  documento: string | null;

  @Column({ nullable: true })
  orden: string | null;

  @Column({ nullable: true })
  columna: number | null;
}
