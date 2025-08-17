import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG AUTOGESTION')
export class ConfigAutogestion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  subtitulo: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ default: true })
  visible: boolean;

  @Column({ nullable: true })
  imagen: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  alineacion: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
