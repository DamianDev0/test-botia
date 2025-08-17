import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_costo_kwh')
export class SeeCostoKwh extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  periodo: string | null;

  @Column({ nullable: true })
  costo: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  id: string | null;
}
