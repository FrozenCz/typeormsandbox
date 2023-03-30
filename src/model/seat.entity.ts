import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarEntity } from "./car.entity";


@Entity('seat')
export class SeatEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @ManyToOne(() => CarEntity, car => car.id)
  car: CarEntity

}
