import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empresas')
export class Empresas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  DIRECCION: string | null;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  TELEFONO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  REPRESENTANTE: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  ID: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;
}
