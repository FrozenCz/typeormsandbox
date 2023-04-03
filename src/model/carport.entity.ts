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
  private _manufacturer: ManufacturerEntity;
  @Column() manufacturerId: number;

  @ManyToOne(() => CarEntity)
  @JoinColumn({name: 'carId', referencedColumnName:'id'})
  private _car: CarEntity;
  @Column() carId: number;

  set manufacturer(value: ManufacturerEntity) {
    this._manufacturer = value;
  }

  set car(value: CarEntity) {
    this._car = value;
  }

  getManufacturer(): Promise<ManufacturerEntity> {
    return ManufacturerEntity.findOne({ where: { id: this.manufacturerId } });
  }
}
