import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_datos')
export class SeeDatos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  fec_periodos: Date | null;

  @Column({ nullable: true })
  fec_indicadores: Date | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  fec_variables: Date | null;

  @Column({ nullable: true })
  DISPOSITIVO: number | null;

  @Column({ nullable: true })
  VARIABLE: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  fec_datos: Date | null;
}
