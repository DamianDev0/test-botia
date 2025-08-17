import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_gruppos')
export class TraGruppos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;
}
