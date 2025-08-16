import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_temperatura')
export class SeeTemperatura extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  TITULO: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;
}
