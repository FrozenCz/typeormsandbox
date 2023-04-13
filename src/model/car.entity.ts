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
import { CarportEntity } from "./carport.entity";


@Entity('car')
export class CarEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ManufacturerEntity, manufacturer => manufacturer.id)
  manufacturer: ManufacturerEntity
  @Column()
  manufacturerId: number;

  @ManyToMany(() => DriverEntity)
  @JoinTable({
    name: 'cars_drivers',
    inverseJoinColumn: {name: 'driver_id', referencedColumnName: 'id'},
    joinColumn: {name: 'car_id', referencedColumnName: 'id'}
  })
  drivers: DriverEntity[];

  @OneToMany(() => WheelEntity, wheel => wheel.car)
  wheels: WheelEntity[]

  @OneToMany(() => SeatEntity, seat => seat.car)
  seats: SeatEntity[]

  @OneToMany(() => CarportEntity, carport => carport.car)
  carport: CarportEntity[]



}
