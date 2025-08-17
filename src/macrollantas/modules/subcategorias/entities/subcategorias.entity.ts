import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcategorias')
export class Subcategorias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  estado: string;

  @Column({ nullable: true })
  orden: number;

  @Column({ nullable: true })
  categoria: string;

  @Column({ nullable: true })
  subcategoria: string;

  @Column({ nullable: true })
  empresa: string;

  @Column({ nullable: true })
  id: string;

  @Column({ nullable: true })
  sucursal: string;

  @Column({ nullable: true })
  tipo: string;

  @Column({ nullable: true })
  icono: string;
}
