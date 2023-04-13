import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { connectionOptions } from "./connectionOptions";

config();



export const dataSource =  new DataSource(connectionOptions);
