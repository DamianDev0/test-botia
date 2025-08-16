import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PREGUNTAS')
export class Preguntas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  pregunta: string | null;

  @Column({ nullable: true })
  opciones: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  tipo_calificacion: string | null;
}
