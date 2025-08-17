import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_marcas')
export class TraMarcas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  estado: string | null;
}
