import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcategorias')
export class Subcategorias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ESTADO: string;

  @Column({ nullable: true })
  ORDEN: number;

  @Column({ nullable: true })
  CATEGORIA: string;

  @Column({ nullable: true })
  SUBCATEGORIA: string;

  @Column({ nullable: true })
  EMPRESA: string;

  @Column({ nullable: true })
  id: string;

  @Column({ nullable: true })
  SUCURSAL: string;

  @Column({ nullable: true })
  TIPO: string;

  @Column({ nullable: true })
  ICONO: string;
}
