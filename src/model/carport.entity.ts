import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManufacturerEntity } from "./manufacturer.entity";
import { CarEntity } from "./car.entity";


@Entity("carport")
export class CarportEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: string;

  @ManyToOne(() => ManufacturerEntity)
  @JoinColumn({name: 'manufacturerId', referencedColumnName: 'id'})
  manufacturer: ManufacturerEntity;
  @Column() manufacturerId: number;

  @ManyToOne(() => CarEntity)
  @JoinColumn({name: 'carId', referencedColumnName:'id'})
  car: CarEntity;
  @Column() carId: number;

}
