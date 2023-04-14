"use strict";
exports.__esModule = true;
exports.connectionOptions = void 0;
exports.connectionOptions = {
    extra: { max: 50, readonly: true },
    type: "postgres",
    host: "typeOrmSandBox",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    schema: "public",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: false,
    cache: false
};
