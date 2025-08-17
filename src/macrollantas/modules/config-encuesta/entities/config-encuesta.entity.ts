import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG_ENCUESTA')
export class ConfigEncuesta extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  texto: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  fechaInicial: Date | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  fechaFinal: Date | null;

  @Column({ nullable: true })
  imagen: string | null;
}
