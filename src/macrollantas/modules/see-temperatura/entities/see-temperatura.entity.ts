import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_temperatura')
export class SeeTemperatura extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  numero: string | null;

  @Column({ nullable: true })
  sucursal: string | null;
}
