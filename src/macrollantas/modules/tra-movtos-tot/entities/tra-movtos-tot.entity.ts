import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_movtos_tot')
export class TraMovtosTot extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ name: 'CONCEPTO CONTABLE', nullable: true })
  'CONCEPTO CONTABLE': string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  TOTAL: number | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  ID_TRA_COTIZACION: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  CONCEPTO: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;
}
