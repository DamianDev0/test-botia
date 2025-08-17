import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kardex')
export class Kardex extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'SALDO INICIAL', nullable: true })
  'SALDO INICIAL': number | null;

  @Column({ nullable: true })
  stock: number | null;

  @Column({ nullable: true })
  referencias: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  modelos: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  entrada: number | null;

  @Column({ nullable: true })
  salida: number | null;

  @Column({ nullable: true })
  codigo: string | null;

  @Column({ nullable: true })
  foto: string | null;

  @Column({ nullable: true })
  sku: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  descripcion: string | null;

  @Column({ name: 'MARCA REFERENCIA', nullable: true })
  'MARCA REFERENCIA': string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  iva: number | null;

  @Column({ name: 'VALOR UNITARIO', nullable: true })
  'VALOR UNITARIO': number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  nicho: string | null;
}
