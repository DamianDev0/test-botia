import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTENIDOS_PRO')
export class ContenidosPro extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

  @Column({ nullable: true })
  id_contenido_sub: string | null;

  @Column({ nullable: true })
  id_empresa: string | null;

  @Column({ nullable: true })
  id_contenido_rec: string | null;

  @Column({ nullable: true })
  id_sucursal: string | null;

  @Column({ nullable: true })
  id_usuario: string | null;

  @Column({ nullable: true })
  id: string | null;

  @Column({ nullable: true })
  num_avance: number | null;

  @Column({ nullable: true })
  num_final: number | null;

  @Column({ nullable: true })
  num_inicial: number | null;
}
