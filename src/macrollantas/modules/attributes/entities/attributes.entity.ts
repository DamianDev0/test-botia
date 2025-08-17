import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ATRIBUTOS')
export class Atributos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  valor: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  atributo: string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
