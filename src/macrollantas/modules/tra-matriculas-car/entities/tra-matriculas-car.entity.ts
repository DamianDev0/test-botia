import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas_car')
export class TraMatriculasCar extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  idMatricula: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  atributo: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  valor: string | null;
}
