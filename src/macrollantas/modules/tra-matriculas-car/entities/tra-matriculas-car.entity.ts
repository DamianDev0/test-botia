import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas_car')
export class TraMatriculasCar extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  ID_MATRICULA: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  ATRIBUTO: string | null;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  VALOR: string | null;
}
