import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ENCUESTA')
export class Encuesta extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  pregunta: string | null;

  @Column({ nullable: true })
  calificacion: number | null;

  @Column({ nullable: true })
  respuesta: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  observaciones: string | null;
}
