import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG AUTOGESTION')
export class ConfigAutogestion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  SUBTITULO: string | null;

  @Column({ nullable: true })
  TITULO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ default: true })
  VISIBLE: boolean;

  @Column({ nullable: true })
  IMAGEN: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  ALINEACION: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;
}
