import {
  BaseEntity,
  Column,
  Entity, JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn, RelationId
} from "typeorm";
import { ManufacturerEntity } from "./manufacturer.entity";
import { DriverEntity } from "./driver.entity";
import { SeatEntity } from "./seat.entity";
import { WheelEntity } from "./wheel.entity";


@Entity('car')
export class CarEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ManufacturerEntity, manufacturer => manufacturer.id, {eager: true})
  manufacturer: ManufacturerEntity
  @Column()
  manufacturerId: number;

  @ManyToMany(() => DriverEntity, {eager: true})
  @JoinTable({
    name: 'cars_drivers',
    inverseJoinColumn: {name: 'driver_id', referencedColumnName: 'id'},
    joinColumn: {name: 'car_id', referencedColumnName: 'id'}
  })
  drivers: DriverEntity[];

  @OneToMany(() => WheelEntity, wheel => wheel.car, {eager: true})
  private wheels: WheelEntity[]

  @OneToMany(() => SeatEntity, seat => seat.car, {eager: true})
  private seats: SeatEntity[]

}
