import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('FORMA PAGO')
export class FormaPago extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ type: 'numeric', nullable: true })
  PLAZO: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  NICHO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;
}
