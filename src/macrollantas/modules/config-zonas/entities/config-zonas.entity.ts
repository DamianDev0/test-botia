import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG ZONAS')
export class ConfigZonas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  columnas: number | null;

  @Column({ nullable: true })
  panel: number | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  filas: number | null;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ nullable: true })
  zona: string | null;

  @Column({ nullable: true })
  tipo: string | null;

  @Column({ nullable: true })
  cantidad: number | null;

  @Column({ nullable: true })
  alineacion: string | null;
}
