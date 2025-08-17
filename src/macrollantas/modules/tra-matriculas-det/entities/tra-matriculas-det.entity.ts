import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_matriculas_det')
export class TraMatriculasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  idMatricula: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  sku: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  ubicacion: string | null;
}
