import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empresas')
export class Empresas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  direccion: string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  telefono: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  representante: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  estado: string | null;
}
