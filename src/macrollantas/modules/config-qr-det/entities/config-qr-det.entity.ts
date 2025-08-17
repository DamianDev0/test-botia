import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONFIG QR DET')
export class ConfigQrDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  estado: string | null;

  @Column({ nullable: true })
  qr: string | null;
}
