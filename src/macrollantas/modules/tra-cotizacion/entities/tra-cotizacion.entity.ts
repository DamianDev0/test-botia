import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_cotizacion')
export class TraCotizacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ name: 'FORMA PAGO', nullable: true })
  'FORMA PAGO': string | null;

  @Column({ name: 'TIPO ROMBO', nullable: true })
  'TIPO ROMBO': string | null;

  @Column({ nullable: true })
  FECHA: Date | null;

  @Column({ nullable: true })
  TIEMPO: number | null;

  @Column({ nullable: true })
  ASESOR: string | null;

  @Column({ name: 'TIPO VISTA', nullable: true })
  'TIPO VISTA': string | null;

  @Column({ name: 'TIPO VENTA', nullable: true })
  'TIPO VENTA': string | null;

  @Column({ name: 'NOTAS CLIENTE', nullable: true })
  'NOTAS CLIENTE': string | null;

  @Column({ nullable: true })
  PLACA: string | null;

  @Column({ nullable: true })
  REFERENCIA2: string | null;

  @Column({ name: 'FECHA CREACION', nullable: true })
  'FECHA CREACION': Date | null;

  @Column({ nullable: true })
  USUARIO: string | null;

  @Column({ nullable: true })
  NIT: string | null;

  @Column({ nullable: true })
  MOVIMIENTO: string | null;

  @Column({ nullable: true })
  ROMBO: string | null;

  @Column({ nullable: true })
  NOMBRE: string | null;

  @Column({ nullable: true })
  BODEGA: string | null;

  @Column({ nullable: true })
  SUCURSAL: string | null;

  @Column({ name: 'TIPO MOTOR', nullable: true })
  'TIPO MOTOR': string | null;

  @Column({ nullable: true })
  EMAIL: string | null;

  @Column({ nullable: true })
  SUBCATEGORIA: string | null;

  @Column({ nullable: true })
  NOTAS: string | null;

  @Column({ name: 'FECHA VENCE', nullable: true })
  'FECHA VENCE': Date | null;

  @Column({ nullable: true })
  ESTADO: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  KILOMETRAJE: number | null;

  @Column({ nullable: true })
  TELEFONO: string | null;

  @Column({ nullable: true })
  NUMERO: string | null;

  @Column({ nullable: true })
  CONCEPTO: string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  CATEGORIA: string | null;

  @Column({ nullable: true })
  MARCA: string | null;

  @Column({ nullable: true })
  PLAZO: number | null;

  @Column({ name: 'BODEGA DESTINO', nullable: true })
  'BODEGA DESTINO': string | null;

  @Column({ nullable: true })
  MODELO: number | null;
}
