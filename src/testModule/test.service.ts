import { Injectable } from "@nestjs/common";
import { createConnection } from "typeorm";
import { connectionOptions } from "../connectionOptions";
import { SeatEntity } from "../model/seat.entity";

@Injectable()
export class TestService {

  async getSeats(): Promise<any> {
    const connection = await createConnection({...connectionOptions, name: 'test' + Date.now()});
    const test = await connection.getRepository(SeatEntity).find();
    await connection.close();
    return test;
  }

}
