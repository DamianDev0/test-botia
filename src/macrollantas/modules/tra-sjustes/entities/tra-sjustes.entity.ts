import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tra_sjustes')
export class TraSjustes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;

  
}
