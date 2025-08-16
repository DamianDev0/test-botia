import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_mediciones')
export class SeeMediciones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  AÑO: number | null;

  @Column({ nullable: true })
  MES: number | null;

  @Column({ nullable: true })
  ID_DISPOSITIVO: string | null;

  @Column({ nullable: true })
  PROMEDIO: number | null;

  @Column({ nullable: true })
  DIA: number | null;

  @Column({ nullable: true })
  MINIMO: number | null;

  @Column({ nullable: true })
  HORA: number | null;

  @Column({ nullable: true })
  MAXIMO: number | null;

  @Column({ nullable: true })
  ID_VARIABLE: string | null;

  @Column({ nullable: true })
  FRECUENCIA: string | null;
}
