import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_SUBMENUS')
export class SysSubmenus extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'ORDEN-S', nullable: true })
  'ORDEN-S': number | null;

  @Column({ nullable: true })
  item: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  submenu: string | null;

  @Column({ nullable: true })
  vista: string | null;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ name: 'ORDEN-M', nullable: true })
  'ORDEN-M': number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  menu: string | null;

  @Column({ nullable: true })
  app: string | null;
}
