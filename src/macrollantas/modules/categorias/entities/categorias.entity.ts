import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categorias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  icono: string | null;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
