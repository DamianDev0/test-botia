import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas_det')
export class TraMatriculasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ID_MATRICULA: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  SKU: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  UBICACION: string | null;
}
