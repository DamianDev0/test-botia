import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_ROL_CAMPO')
export class SysRolCampo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  tabla: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  rol: string | null;

  @Column({ nullable: true })
  permiso: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  campo: string | null;
}
