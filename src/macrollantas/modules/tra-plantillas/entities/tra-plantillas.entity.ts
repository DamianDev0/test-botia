import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_plantillas')
export class TraPlantillas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  tiempo: number | null;

  @Column({ name: 'FECHA CREACION', nullable: true })
  'FECHA CREACION': Date | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ name: 'TIPO MOTOR', nullable: true })
  'TIPO MOTOR': string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  parte: string | null;

  @Column({ nullable: true })
  numero: string | null;
}
