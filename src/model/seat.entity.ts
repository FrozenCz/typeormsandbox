import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { CarEntity } from "./car.entity";


@Entity('seat')
export class SeatEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @ManyToOne(() => CarEntity)
  car: CarEntity
  @JoinColumn({name: 'carId', referencedColumnName: 'id'})
  carId: number

}
