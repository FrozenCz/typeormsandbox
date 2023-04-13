import { Body, CACHE_MANAGER, Controller, Get, Inject, Logger, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { DriverEntity } from "./model/driver.entity";
import { ManufacturerEntity } from "./model/manufacturer.entity";
import { CarEntity } from "./model/car.entity";
import { Connection, createConnection, getConnection, In } from "typeorm";
import { WheelEntity } from "./model/wheel.entity";
import { SeatEntity } from "./model/seat.entity";
import { CarportEntity } from "./model/carport.entity";
import { TestService } from "./testModule/test.service";
import { CacheService } from "./Cache/cache.service";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { Cache } from 'cache-manager'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly testService: TestService,
              private cacheService: CacheService,
              @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
  }

  @Get()
  async getHello() {
    const cached = await this.cacheManager.get('allList');
    if (cached) {
      return cached;
    }
    return combineLatest(this.getWheels(), this.getSeat(), this.getCars(), this.getCarport(), this.getManufacturer(), this.getDriver())
      .pipe(
        map(([wheels, seats, cars, carport, manufacturer, driver]) => {
          const returned = {
            wheels,
            seats,
            cars,
            carport,
            manufacturer,
            driver
          }
          this.cacheManager.set('allList', returned);
          return returned;
        }));
  }


  @Get("/driver")
  getDriver(): any {
    return DriverEntity.find();
  }

  @Get("/car")
  async getCars(): Promise<any> {
    const looger = new Logger("Car");
    looger.warn("start");

    // let cached;
    // try {
    //   cached = await this.cacheService.loadCache<CarEntity[]>('carsList');
    //   console.log(cached);
    // } catch (e) {}
    // if (cached) {
    //   looger.warn('endWithCache')
    //   return cached;
    // }

    const cars = await CarEntity.find({ relations: { drivers: true, carport: { manufacturer: true} } });
    looger.warn("end with database");
    return cars;
  }

  @Get("/manufacturer")
  async getManufacturer(): Promise<any> {
    return ManufacturerEntity.find();
  }

  @Get("/wheel")
  getWheels(): Promise<any> {
    return WheelEntity.find();
  }

  @Get("/seat")
  async getSeat(): Promise<any> {
    return SeatEntity.find();
  }

  @Get("/carport")
  getCarport(): Promise<any> {
    return CarportEntity.find({ transaction: false });
  }


  @Post("/driver")
  createDriver(
    @Body() driver: {
      name: string
    }
  ): any {
    const driverEntity = new DriverEntity();
    driverEntity.name = driver.name;
    return driverEntity.save();
  }


  @Post("/manufacturer")
  createManufacturer(
    @Body() manufacturer: {
      name: string
    }
  ): any {
    const manufacturerEntity = new ManufacturerEntity();
    manufacturerEntity.name = manufacturer.name;
    return manufacturerEntity.save();
  }


  @Get("/car/:id")
  async getCar(
    @Param("id", ParseIntPipe) id: number
  ): Promise<any> {
    const car = await CarEntity.findOne({ where: { id } });

    return car;
  }

  @Post("/car")
  async createCar(
    @Body() post: {
      name: string;
      manufacturerId: string;
      driversId: string;
    }
  ): Promise<any> {

    const driversIds = post.driversId.split(",").map(to => +to);
    const car = new CarEntity();
    const manufacturer = await ManufacturerEntity.findOne({ where: { id: +post.manufacturerId } });
    const drivers = await DriverEntity.find({ where: { id: In(driversIds) } });
    car.manufacturer = manufacturer;
    car.drivers = drivers;
    car.name = post.name;
    return car.save();
  }

  @Post("/wheel")
  async createWheel(
    @Body() post: {
      size: string
      carId: string
    }
  ): Promise<any> {
    const wheel = new WheelEntity();
    const car = await CarEntity.findOne({ where: { id: +post.carId } });
    wheel.car = car;
    wheel.size = +post.size;
    return wheel.save();
  }


  @Post("/seat")
  async createSeat(
    @Body() post: {
      color: string
      carId: string
    }
  ): Promise<any> {
    const seat = new SeatEntity();
    const car = await CarEntity.findOne({ where: { id: +post.carId } });
    seat.car = car;
    seat.color = post.color;
    return seat.save();
  }


  @Post("/carport")
  async createCarport(
    @Body() post: {
      serialNumber: string
      carId: string
      manufacturerId: string
    }
  ): Promise<any> {
    const carportEntity = new CarportEntity();
    const car = await CarEntity.findOne({ where: { id: +post.carId } });
    const manufacturer = await ManufacturerEntity.findOne({ where: { id: +post.manufacturerId } });
    carportEntity.car = car;
    carportEntity.manufacturer = manufacturer;
    carportEntity.serialNumber = post.serialNumber;
    return carportEntity.save();

  }

  @Get("/carport/:id")
  async getCarportById(
    @Param("id", ParseIntPipe) id: number
  ): Promise<any> {
    const carport = await CarportEntity.findOne({ where: { id } });
    return carport;
  }


}
