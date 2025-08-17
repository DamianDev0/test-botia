import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CUESTIONARIOS_R')
export class CuestionariosR extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  idSucursal: string | null;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  idPregunta: string | null;

  @Column({ default: true })
  resultado: boolean;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  idUsuario: string | null;

  @Column({ default: true })
  meGusta: boolean;

  @Column({ nullable: true })
  calificación: number | null;

  @Column({ nullable: true })
  fechaRespuesta: Date | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  intento: number | null;

  @Column({ default: true })
  denunciar: boolean;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ nullable: true })
  urlFoto: string | null;

  @Column({ nullable: true })
  respuesta: string | null;
}
