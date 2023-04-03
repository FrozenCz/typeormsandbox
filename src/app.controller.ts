import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { DriverEntity } from "./model/driver.entity";
import { ManufacturerEntity } from "./model/manufacturer.entity";
import { CarEntity } from "./model/car.entity";
import { In } from "typeorm";
import { WheelEntity } from "./model/wheel.entity";
import { SeatEntity } from "./model/seat.entity";
import { CarportEntity } from "./model/carport.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/driver')
  getDriver(): any {
    return DriverEntity.find();
  }

  @Post('/driver')
  createDriver(
    @Body() driver: {
      name: string
    }
  ): any {
    const driverEntity = new DriverEntity();
    driverEntity.name = driver.name;
    return driverEntity.save();
  }


  @Get('/manufacturer')
  getManufacturer(): any {
    return ManufacturerEntity.find();
  }

  @Post('/manufacturer')
  createManufacturer(
    @Body() manufacturer: {
      name: string
    }
  ): any {
    const manufacturerEntity = new ManufacturerEntity();
    manufacturerEntity.name = manufacturer.name
    return manufacturerEntity.save();
  }

  @Get('/car')
  getCars(): any {
    return CarEntity.find({relations: ['_drivers']})
  }
  

  @Get('/car/:id')
  async getCar(
    @Param('id', ParseIntPipe) id: number
  ): Promise<any> {
    const car = await CarEntity.findOne({where: {id}})

    return car;
  }

  @Post('/car')
  async createCar(
    @Body() post: {
      name: string;
      manufacturerId: string;
      driversId: string;
    }
  ): Promise<any> {

    const driversIds = post.driversId.split(',').map(to => +to);
    const car = new CarEntity();
    const manufacturer = await ManufacturerEntity.findOne({where: {id: +post.manufacturerId}})
    const drivers = await DriverEntity.find({where: {id: In(driversIds)}})
    car.manufacturer = manufacturer;
    car.drivers = drivers;
    car.name = post.name;
    return car.save();
  }

  @Post('/wheel')
  async createWheel(
    @Body() post: {
      size: string
      carId: string
    }
  ): Promise<any> {
    const wheel = new WheelEntity();
    const car = await CarEntity.findOne({where: {id: +post.carId}})
    wheel.car = car;
    wheel.size = +post.size;
    return wheel.save();
  }

  @Get('/wheel')
  getWheels(): Promise<any> {
    return WheelEntity.find();
  }

  @Post('/seat')
  async createSeat(
    @Body() post: {
      color: string
      carId: string
    }
  ): Promise<any> {
    const seat = new SeatEntity();
    const car = await CarEntity.findOne({where: {id: +post.carId}})
    seat.car = car;
    seat.color = post.color;
    return seat.save();
  }

  @Get('/seat')
  getSeat(): Promise<any> {
    return SeatEntity.find();
  }

  @Post('/carport')
  async createCarport(
    @Body() post: {
      serialNumber: string
      carId: string
      manufacturerId: string
    }
  ): Promise<any> {
    const carportEntity = new CarportEntity();
    const car = await CarEntity.findOne({where: {id: +post.carId}})
    const manufacturer = await ManufacturerEntity.findOne({where: {id: +post.manufacturerId}})
    carportEntity.car = car;
    carportEntity.manufacturer = manufacturer;
    carportEntity.serialNumber = post.serialNumber;
    return carportEntity.save();

  }

  @Get('/carport/:id')
  async getCarportById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<any> {
    const carport = await CarportEntity.findOne({where: {id}})
    return carport;
  }

  @Get('/carport')
  getCarport(): Promise<any> {
    return CarportEntity.find();
  }



}
