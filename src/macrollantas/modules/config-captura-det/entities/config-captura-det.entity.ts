import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG CAPTURA DET')
export class ConfigCapturaDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  PASSWORD: string | null;

  @Column({ name: 'TIPO ', nullable: true })
  TIPO: string | null;

  @Column({ default: true })
  MAYUSCULA: boolean;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ default: true })
  VER: boolean;

  @Column({ name: 'VALOR INICIAL', nullable: true })
  VALOR_INICIAL: string | null;
}
