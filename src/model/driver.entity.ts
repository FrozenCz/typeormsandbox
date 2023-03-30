import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('driver')
export class DriverEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
