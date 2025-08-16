import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TABLAS_DET')
export class TablasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  ID_TABLAS: string | null;

  @Column({ nullable: true })
  VALOR: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  CAMPO: string | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;
}
