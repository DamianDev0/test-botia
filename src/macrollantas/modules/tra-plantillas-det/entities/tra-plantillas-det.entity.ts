import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_plantillas_det')
export class TraPlantillasDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  ID_TRA_PLANTILLA: string | null;

  @Column({ nullable: true })
  TIEMPO: number | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  NUMERO: number | null;

  @Column({ nullable: true })
  IVA: number | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ nullable: true })
  COMPONENTE: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ name: 'VRU ORIGINAL', nullable: true })
  'VRU ORIGINAL': number | null;

  @Column({ name: 'DESCRIPCION 2', nullable: true })
  'DESCRIPCION 2': string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ name: 'VRT HOMOLOGADO', nullable: true })
  'VRT HOMOLOGADO': number | null;

  @Column({ name: 'VRT ORIGINAL', nullable: true })
  'VRT ORIGINAL': number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  ORIGEN: string | null;

  @Column({ nullable: true })
  APROBACION: string | null;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ name: 'VRU HOMOLOGADO', nullable: true })
  'VRU HOMOLOGADO': number | null;

  @Column({ nullable: true })
  UNIDAD: string | null;
}
