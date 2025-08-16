import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos')
export class TraProcesos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  cod_proceso: string | null;

  @Column({ default: true })
  ind_ver: boolean;

  @Column({ nullable: true })
  nom_proceso: string | null;

  @Column({ nullable: true })
  cod_empresa: string | null;

  @Column({ nullable: true })
  num_orden: number | null;

  @Column({ nullable: true })
  TIPO: string | null;
}
