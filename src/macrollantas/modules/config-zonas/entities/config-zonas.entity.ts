import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG ZONAS')
export class ConfigZonas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  COLUMNAS: number | null;

  @Column({ nullable: true })
  PANEL: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  FILAS: number | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  ZONA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  CANTIDAD: number | null;

  @Column({ nullable: true })
  ALINEACION: string | null;
}
