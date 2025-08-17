import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_datos')
export class SeeDatos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  fecPeriodos: Date | null;

  @Column({ nullable: true })
  fecIndicadores: Date | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  fecVariables: Date | null;

  @Column({ nullable: true })
  dispositivo: number | null;

  @Column({ nullable: true })
  variable: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  fecDatos: Date | null;
}
