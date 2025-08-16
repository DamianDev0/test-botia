import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categorias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  ICONO: string | null;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;
}
