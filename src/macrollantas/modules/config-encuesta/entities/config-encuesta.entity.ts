import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG_ENCUESTA')
export class ConfigEncuesta extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  texto: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  fecha_inicial: Date | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  fecha_final: Date | null;

  @Column({ nullable: true })
  imagen: string | null;
}
