import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_plantillas')
export class TraPlantillas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  TIEMPO: number | null;

  @Column({ name: 'FECHA CREACION', nullable: true })
  'FECHA CREACION': Date | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ name: 'TIPO MOTOR', nullable: true })
  'TIPO MOTOR': string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  MARCA: string | null;

  @Column({ nullable: true })
  CONCEPTO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  PARTE: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;
}
