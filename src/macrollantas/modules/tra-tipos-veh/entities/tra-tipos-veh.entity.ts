import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_tipos_veh')
export class TraTiposVeh extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  estado: string | null;
}
