import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tecnicos')
export class Tecnicos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  INICIALES: string | null;

  @Column({ nullable: true })
  SERVICIOS: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;
}
