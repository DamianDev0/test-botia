import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_SUBMENUS')
export class SysSubmenus extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'ORDEN-S', nullable: true })
  'ORDEN-S': number | null;

  @Column({ nullable: true })
  item: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  SUBMENU: string | null;

  @Column({ nullable: true })
  VISTA: string | null;

  @Column({ nullable: true })
  ROL: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ name: 'ORDEN-M', nullable: true })
  'ORDEN-M': number | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  MENU: string | null;

  @Column({ nullable: true })
  APP: string | null;
}
