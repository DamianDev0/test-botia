import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_referencias_proveedor')
export class TraReferenciasProveedor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  refProveedor: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  empresa: string | null;
}
