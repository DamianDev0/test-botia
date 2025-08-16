import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_cilindraje')
export class TraCilindraje extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;
}
