import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_categorias')
export class TraCategorias extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  ORDEN: number | null;

  @Column({ nullable: true })
  MODELO: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  MARCA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  CILINDRAJE: string | null;
}
