import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_APPS')
export class SysApps extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  app: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  estado: string | null;
}
