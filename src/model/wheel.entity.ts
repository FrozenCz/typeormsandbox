import { BaseEntity, Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarEntity } from "./car.entity";



@Entity('wheel')
export class WheelEntity extends BaseEntity {


  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  @ManyToOne(() => CarEntity, car => car.id)
  car: CarEntity;

}
