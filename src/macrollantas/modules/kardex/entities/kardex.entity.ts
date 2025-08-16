import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kardex')
export class Kardex extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'SALDO INICIAL', nullable: true })
  'SALDO INICIAL': number | null;

  @Column({ nullable: true })
  STOCK: number | null;

  @Column({ nullable: true })
  REFERENCIAS: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ name: 'SKU PROV', nullable: true })
  'SKU PROV': string | null;

  @Column({ nullable: true })
  MODELOS: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ENTRADA: number | null;

  @Column({ nullable: true })
  SALIDA: number | null;

  @Column({ nullable: true })
  CODIGO: string | null;

  @Column({ nullable: true })
  FOTO: string | null;

  @Column({ nullable: true })
  SKU: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  DESCRIPCION: string | null;

  @Column({ name: 'MARCA REFERENCIA', nullable: true })
  'MARCA REFERENCIA': string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  SUBCATEGORIA: string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  MARCA: string | null;

  @Column({ nullable: true })
  IVA: number | null;

  @Column({ name: 'VALOR UNITARIO', nullable: true })
  'VALOR UNITARIO': number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  NICHO: string | null;
}
