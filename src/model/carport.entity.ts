import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManufacturerEntity } from "./manufacturer.entity";
import { CarEntity } from "./car.entity";


@Entity('carport')
export class CarportEntity extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: string

  @ManyToOne(() => ManufacturerEntity, manufacturer => manufacturer.id)
  private _manufacturer: ManufacturerEntity
  @Column() manufacturerId: number;

  @ManyToOne(() => CarEntity, car => car.id)
  car: CarEntity
  @Column() carId: number


  set manufacturer(value: ManufacturerEntity) {
    this._manufacturer = value;
  }


  getManufacturer(): Promise<ManufacturerEntity> {
    return ManufacturerEntity.findOne({where: {id: this.manufacturerId}})
  }
}
