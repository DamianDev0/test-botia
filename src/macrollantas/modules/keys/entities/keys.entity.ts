import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('CLAVES')
export class Claves extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  clave: string | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  formulario: string | null;
}
