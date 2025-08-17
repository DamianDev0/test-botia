import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TABLAS_DET')
export class TablasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  idTablas: string | null;

  @Column({ nullable: true })
  valor: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  campo: string | null;

  @Column({ nullable: true })
  componente: string | null;
}
