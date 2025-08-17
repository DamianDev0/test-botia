import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_cotizacion')
export class TraCotizacion extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ name: 'FORMA PAGO', nullable: true })
  'FORMA PAGO': string | null;

  @Column({ name: 'TIPO ROMBO', nullable: true })
  'TIPO ROMBO': string | null;

  @Column({ nullable: true })
  fecha: Date | null;

  @Column({ nullable: true })
  tiempo: number | null;

  @Column({ nullable: true })
  asesor: string | null;

  @Column({ name: 'TIPO VISTA', nullable: true })
  'TIPO VISTA': string | null;

  @Column({ name: 'TIPO VENTA', nullable: true })
  'TIPO VENTA': string | null;

  @Column({ name: 'NOTAS CLIENTE', nullable: true })
  'NOTAS CLIENTE': string | null;

  @Column({ nullable: true })
  placa: string | null;

  @Column({ nullable: true })
  referencia2: string | null;

  @Column({ name: 'FECHA CREACION', nullable: true })
  'FECHA CREACION': Date | null;

  @Column({ nullable: true })
  usuario: string | null;

  @Column({ nullable: true })
  nit: string | null;

  @Column({ nullable: true })
  movimiento: string | null;

  @Column({ nullable: true })
  rombo: string | null;

  @Column({ nullable: true })
  nombre: string | null;

  @Column({ nullable: true })
  bodega: string | null;

  @Column({ nullable: true })
  sucursal: string | null;

  @Column({ name: 'TIPO MOTOR', nullable: true })
  'TIPO MOTOR': string | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  subcategoria: string | null;

  @Column({ nullable: true })
  notas: string | null;

  @Column({ name: 'FECHA VENCE', nullable: true })
  'FECHA VENCE': Date | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  kilometraje: number | null;

  @Column({ nullable: true })
  telefono: string | null;

  @Column({ nullable: true })
  numero: string | null;

  @Column({ nullable: true })
  concepto: string | null;

  @Column({ name: 'TIPO VEHICULO', nullable: true })
  'TIPO VEHICULO': string | null;

  @Column({ nullable: true })
  categoria: string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  plazo: number | null;

  @Column({ name: 'BODEGA DESTINO', nullable: true })
  'BODEGA DESTINO': string | null;

  @Column({ nullable: true })
  modelo: number | null;
}
