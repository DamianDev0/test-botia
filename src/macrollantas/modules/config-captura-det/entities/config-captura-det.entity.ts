import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG CAPTURA DET')
export class ConfigCapturaDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  password: string | null;

  @Column({ name: 'TIPO ', nullable: true })
  tipo: string | null;

  @Column({ default: true })
  mayuscula: boolean;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ default: true })
  ver: boolean;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  valorInicial: string | null;
}
