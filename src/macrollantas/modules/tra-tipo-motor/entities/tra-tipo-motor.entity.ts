import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_tipo_motor')
export class TraTipoMotor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  @Column({ nullable: true })
  motor: string | null;

  @Column({ nullable: true })
  marca: string | null;

  @Column({ nullable: true })
  emprfesa: string | null;

  @Column({ nullable: true })
  referencia: string | null;

  @Column({ nullable: true })
  tipo: string | null;
}
