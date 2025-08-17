import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('FORMA PAGO')
export class FormaPago extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ type: 'numeric', nullable: true })
  plazo: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
