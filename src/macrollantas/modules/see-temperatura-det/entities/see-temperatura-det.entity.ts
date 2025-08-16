import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('see_temperatura_det')
export class SeeTemperaturaDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  HORA: string | null;

  @Column({ nullable: true })
  NUMERO: number | null;

  @Column({ nullable: true })
  ID_TEMPERATURA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;

  @Column({ nullable: true })
  EMPRESA: string | null;

  @Column({ nullable: true })
  TEMPERATURA: number | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ nullable: true })
  RESPONSABLE: string | null;

  @Column({ nullable: true })
  ESTADO: string | null;
}
