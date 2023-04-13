import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const connectionOptions: PostgresConnectionOptions = {
  extra: {max: 50, readonly: true},
  type: "postgres",
  host: "typeOrmSandBox",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "typeOrmSandBox",
  schema: "public",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: false,
  cache: false,
  migrations: ['src/migrations/**/*{.ts,.js}'],

  // logging: 'all',
  // logger: 'advanced-console'
}
