import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_tipos_veh')
export class TraTiposVeh extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;
}
