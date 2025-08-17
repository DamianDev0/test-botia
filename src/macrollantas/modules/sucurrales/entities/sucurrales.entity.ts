import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sucurrales')
export class Sucurrales extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;
}
