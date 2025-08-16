import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG BD')
export class ConfigBd extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  USUARIO: string | null;

  @Column({ name: 'NOMBRE BD', nullable: true })
  'NOMBRE BD': string | null;

  @Column({ default: true })
  ESTADO: boolean;

  @Column({ nullable: true })
  IP: string | null;

  @Column({ name: 'ID SERVICIOS', nullable: true })
  'ID SERVICIOS': string | null;

  @Column({ nullable: true })
  CONTRASEÑA: string | null;

  @Column({ nullable: true })
  PUERTO: number | null;

  @Column({ nullable: true })
  ESQUEMA: string | null;

  @Column({ name: 'BASE DE DATOS', nullable: true })
  'BASE DE DATOS': string | null;

  @Column({ nullable: true })
  PROTOCOLO: string | null;
}
