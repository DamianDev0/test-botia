import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG_CITAS')
export class ConfigCitas extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ nullable: true })
  frecuencia: string | null;

  @Column({ nullable: true })
  horaFinal: string | null;

  @Column({ nullable: true })
  fechaInicial: Date | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  fechaFinal: Date | null;

  @Column({ nullable: true })
  citas: number | null;

  @Column({ nullable: true })
  horaInicial: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  empresa: string | null;
}
