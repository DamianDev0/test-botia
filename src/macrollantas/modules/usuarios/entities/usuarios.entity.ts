import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  correo: string | null;

  @Column({ nullable: true })
  edad: number | null;
}
