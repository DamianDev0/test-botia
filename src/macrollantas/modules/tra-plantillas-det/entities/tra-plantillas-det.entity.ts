import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_plantillas_det')
export class TraPlantillasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  idTraPlantilla: string | null;

  @Column({ nullable: true })
  tiempo: number | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  numero: number | null;

  @Column({ nullable: true })
  iva: number | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  componente: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ name: 'VRU ORIGINAL', nullable: true })
  'VRU ORIGINAL': number | null;

  @Column({ name: 'DESCRIPCION 2', nullable: true })
  'DESCRIPCION 2': string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ name: 'VRT HOMOLOGADO', nullable: true })
  'VRT HOMOLOGADO': number | null;

  @Column({ name: 'VRT ORIGINAL', nullable: true })
  'VRT ORIGINAL': number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  origen: string | null;

  @Column({ nullable: true })
  aprobacion: string | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ name: 'VRU HOMOLOGADO', nullable: true })
  'VRU HOMOLOGADO': number | null;

  @Column({ nullable: true })
  unidad: string | null;
}
