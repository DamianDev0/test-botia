import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('CONFIG')
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  colorFondoSecundario: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  colorLabel: string | null;

  @Column({ nullable: true })
  colorFondoFormulario: string | null;

  @Column({ nullable: true })
  radioInferior: number | null;

  @Column({ nullable: true })
  rutaLogo: string | null;

  @Column({ nullable: true })
  colorBotonTexto: string | null;

  @Column({ nullable: true })
  colorAppBar: string | null;

  @Column({ nullable: true })
  colorContrasteFondoSecundario: string | null;

  @Column({ nullable: true })
  colorContrasteFondoFormulario: string | null;

  @Column({ default: true })
  usaGradiente: boolean;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  colorMenuDrawer: string | null;

  @Column({ nullable: true })
  colorPrimario: string | null;

  @Column({ nullable: true })
  colorFondo: string | null;

  @Column({ nullable: true })
  colorGradientePrimario: string | null;

  @Column({ nullable: true })
  radioSuperior: number | null;

  @Column({ nullable: true })
  colorGradienteSecundario: string | null;

  @Column({ nullable: true })
  rutaLogoFondo: string | null;

  @Column({ nullable: true })
  idEmpresa: string | null;

  @Column({ nullable: true })
  nicho: string | null;

  @Column({ nullable: true })
  colorContrasteFondo: string | null;

  @Column({ nullable: true })
  colorError: string | null;

  @Column({ nullable: true })
  colorBoton: string | null;

  @Column({ nullable: true })
  orientacionGradiente: string | null;

  @Column({ nullable: true })
  colorContrastePrimario: string | null;

  @Column({ nullable: true })
  nombreEmpresa: string | null;
}
