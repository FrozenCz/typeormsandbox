import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('manufacturer')
export class ManufacturerEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
