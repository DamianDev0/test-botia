import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG KARDEX')
export class ConfigKardex extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  orden: number | null;

  @Column({ default: true })
  multiseleccion: boolean;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  titulo: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ default: true })
  ver: boolean;

  @Column({ default: true })
  descripcion: boolean;

  @Column({ nullable: true })
  empresa: string | null;

  @Column({ name: 'VALOR POR DEFECTO', nullable: true })
  'VALOR POR DEFECTO': string | null;

  @Column({ nullable: true })
  tabla: string | null;
}
