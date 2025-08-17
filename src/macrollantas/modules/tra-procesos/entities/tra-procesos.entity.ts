import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_procesos')
export class TraProcesos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  codProceso: string | null;

  @Column({ default: true })
  indVer: boolean;

  @Column({ nullable: true })
  nomProceso: string | null;

  @Column({ nullable: true })
  codEmpresa: string | null;

  @Column({ nullable: true })
  numOrden: number | null;

  @Column({ nullable: true })
  tipo: string | null;
}
