import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('CLAVES')
export class Claves extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  CLAVE: string | null;

  @Column({ nullable: true })
  USUARIO: string | null;

  @Column({ nullable: true })
  FORMULARIO: string | null;
}
