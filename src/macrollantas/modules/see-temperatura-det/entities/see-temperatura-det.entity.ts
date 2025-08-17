import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_temperatura_det')
export class SeeTemperaturaDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  hora: string | null;

  @Column({ nullable: true })
  numero: number | null;

  @Column({ nullable: true })
  idTemperatura: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  temperatura: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  responsable: string | null;

  @Column({ nullable: true })
  estado: string | null;
}
