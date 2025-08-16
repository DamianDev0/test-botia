import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_tipo_motor')
export class TraTipoMotor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  MOTOR: string | null;

  @Column({ nullable: true })
  MARCA: string | null;

  @Column({ nullable: true })
  EMPRFESA: string | null;

  @Column({ nullable: true })
  REFERENCIA: string | null;

  @Column({ nullable: true })
  TIPO: string | null;
}
