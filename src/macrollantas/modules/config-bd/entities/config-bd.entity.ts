import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG BD')
export class ConfigBd extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'IDP' })
  idp: string;

  @Column({ name: 'USUARIO', nullable: true })
  usuario: string | null;

  @Column({ name: 'NOMBRE BD', nullable: true })
  nombreBd: string | null;

  @Column({ name: 'ESTADO', default: true })
  estado: boolean;

  @Column({ name: 'IP', nullable: true })
  ip: string | null;

  @Column({ name: 'ID SERVICIOS', nullable: true })
  idServicios: string | null;

  @Column({ name: 'CONTRASEÑA', nullable: true })
  contrasena: string | null;

  @Column({ name: 'PUERTO', nullable: true })
  puerto: number | null;

  @Column({ name: 'ESQUEMA', nullable: true })
  esquema: string | null;

  @Column({ name: 'BASE DE DATOS', nullable: true })
  baseDeDatos: string | null;

  @Column({ name: 'PROTOCOLO', nullable: true })
  protocolo: string | null;
}
