import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG DOCUMENTO')
export class ConfigDocumento extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  FILA: number | null;

  @Column({ nullable: true })
  VISTA: string | null;

  @Column({ nullable: true })
  DOCUMENTO: string | null;

  @Column({ nullable: true })
  ORDEN: string | null;

  @Column({ nullable: true })
  COLUMNA: number | null;
}
