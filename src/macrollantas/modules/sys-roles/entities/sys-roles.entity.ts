import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_ROLES')
export class SysRoles extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
