import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_mediciones')
export class SeeMediciones extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  AÑO: number | null;

  @Column({ nullable: true })
  mes: number | null;

  @Column({ nullable: true })
  idDispositivo: string | null;

  @Column({ nullable: true })
  promedio: number | null;

  @Column({ nullable: true })
  dia: number | null;

  @Column({ nullable: true })
  minimo: number | null;

  @Column({ nullable: true })
  hora: number | null;

  @Column({ nullable: true })
  maximo: number | null;

  @Column({ nullable: true })
  idVariable: string | null;

  @Column({ nullable: true })
  frecuencia: string | null;
}
