import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OREPARACION1_2000')
export class Oreparacion12000 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  FECHACREACION: Date | null;

  @Column({ nullable: true })
  CLAVEUSUARIO: string | null;

  @Column({ nullable: true })
  OBSERVACIONES: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ nullable: true })
  NIT: string | null;

  @Column({ nullable: true })
  IVA: number | null;

  @Column({ nullable: true })
  ROMBO: string | null;

  @Column({ nullable: true })
  MES: string | null;

  @Column({ nullable: true })
  IMPRESO: number | null;

  @Column({ nullable: true })
  VENDEDOR: string | null;

  @Column({ nullable: true })
  ANULADO: number | null;

  @Column({ nullable: true })
  BODEGA: string | null;

  @Column({ nullable: true })
  NÚMERO: string | null;

  @Column({ nullable: true })
  PATIO: number | null;

  @Column({ nullable: true })
  CERRADA: number | null;

  @Column({ nullable: true })
  VALORAPROBADO: number | null;

  @Column({ nullable: true })
  LIQUIDAR: number | null;

  @Column({ nullable: true })
  MERCADEO: number | null;

  @Column({ nullable: true })
  TEMP: string | null;

  @Column({ nullable: true })
  ESPERA: number | null;

  @Column({ nullable: true })
  KILOMETRAJE: number | null;

  @Column({ nullable: true })
  PLACA: string | null;

  @Column({ nullable: true })
  VALOR: number | null;
}
