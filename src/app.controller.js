"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var driver_entity_1 = require("./model/driver.entity");
var manufacturer_entity_1 = require("./model/manufacturer.entity");
var car_entity_1 = require("./model/car.entity");
var typeorm_1 = require("typeorm");
var wheel_entity_1 = require("./model/wheel.entity");
var seat_entity_1 = require("./model/seat.entity");
var carport_entity_1 = require("./model/carport.entity");
var connectionOptions_1 = require("./connectionOptions");
var AppController = /** @class */ (function () {
    function AppController(appService, testService, cacheService) {
        this.appService = appService;
        this.testService = testService;
        this.cacheService = cacheService;
    }
    AppController.prototype.getHello = function () {
        // return combineLatest([this.getWheels(), this.getSeat(), this.getCars(), this.getCarport(), this.getManufacturer(), this.getDriver()])
        //   .pipe(
        //     map(([wheels, seats, cars, carport, manufacturer, driver]) => {
        //     return {
        //       wheels,
        //       seats,
        //       cars,
        //       carport,
        //       manufacturer,
        //       driver
        //     }
        //   }))
    };
    AppController.prototype.getDriver = function () {
        return driver_entity_1.DriverEntity.find();
    };
    AppController.prototype.getCars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var looger, cached, e_1, cars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        looger = new common_1.Logger('Car');
                        looger.warn('start');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cacheService.loadCache('carsList')];
                    case 2:
                        cached = _a.sent();
                        console.log(cached);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (cached) {
                            looger.warn('endWithCache');
                            return [2 /*return*/, cached];
                        }
                        return [4 /*yield*/, car_entity_1.CarEntity.find({ relations: ['_drivers'] })];
                    case 5:
                        cars = _a.sent();
                        looger.warn('end with database');
                        return [2 /*return*/, cars];
                }
            });
        });
    };
    AppController.prototype.getManufacturer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var looger, connection, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        looger = new common_1.Logger('Manufacturer');
                        looger.debug('start');
                        return [4 /*yield*/, typeorm_1.createConnection(__assign(__assign({}, connectionOptions_1.connectionOptions), { name: 'test5' + Date.now() }))];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getRepository(manufacturer_entity_1.ManufacturerEntity).find({ transaction: false })];
                    case 2:
                        list = _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 3:
                        _a.sent();
                        looger.debug('end');
                        return [2 /*return*/, list];
                }
            });
        });
    };
    AppController.prototype.getWheels = function () {
        console.log("wheelStart");
        var list = wheel_entity_1.WheelEntity.find();
        console.log('wheelEnd');
        return list;
    };
    AppController.prototype.getSeat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logger, connection, runner, builder, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger = new common_1.Logger('seat');
                        logger.verbose('start');
                        return [4 /*yield*/, typeorm_1.createConnection(__assign(__assign({}, connectionOptions_1.connectionOptions), { name: 'test5' + Date.now() }))];
                    case 1:
                        connection = _a.sent();
                        runner = connection.createQueryRunner();
                        return [4 /*yield*/, runner.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, runner.manager.createQueryBuilder()];
                    case 3:
                        builder = _a.sent();
                        result = builder.select('seat.id').from(seat_entity_1.SeatEntity, 'seat').getMany();
                        runner.release();
                        logger.verbose('end');
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AppController.prototype.getCarport = function () {
        console.log("carPortStart");
        var list = carport_entity_1.CarportEntity.find({ transaction: false });
        console.log('carPortEnd');
        return list;
    };
    AppController.prototype.createDriver = function (driver) {
        var driverEntity = new driver_entity_1.DriverEntity();
        driverEntity.name = driver.name;
        return driverEntity.save();
    };
    AppController.prototype.createManufacturer = function (manufacturer) {
        var manufacturerEntity = new manufacturer_entity_1.ManufacturerEntity();
        manufacturerEntity.name = manufacturer.name;
        return manufacturerEntity.save();
    };
    AppController.prototype.getCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, car_entity_1.CarEntity.findOne({ where: { id: id } })];
                    case 1:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    AppController.prototype.createCar = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var driversIds, car, manufacturer, drivers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        driversIds = post.driversId.split(',').map(function (to) { return +to; });
                        car = new car_entity_1.CarEntity();
                        return [4 /*yield*/, manufacturer_entity_1.ManufacturerEntity.findOne({ where: { id: +post.manufacturerId } })];
                    case 1:
                        manufacturer = _a.sent();
                        return [4 /*yield*/, driver_entity_1.DriverEntity.find({ where: { id: typeorm_1.In(driversIds) } })];
                    case 2:
                        drivers = _a.sent();
                        car.manufacturer = manufacturer;
                        car.drivers = drivers;
                        car.name = post.name;
                        return [2 /*return*/, car.save()];
                }
            });
        });
    };
    AppController.prototype.createWheel = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var wheel, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wheel = new wheel_entity_1.WheelEntity();
                        return [4 /*yield*/, car_entity_1.CarEntity.findOne({ where: { id: +post.carId } })];
                    case 1:
                        car = _a.sent();
                        wheel.car = car;
                        wheel.size = +post.size;
                        return [2 /*return*/, wheel.save()];
                }
            });
        });
    };
    AppController.prototype.createSeat = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var seat, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seat = new seat_entity_1.SeatEntity();
                        return [4 /*yield*/, car_entity_1.CarEntity.findOne({ where: { id: +post.carId } })];
                    case 1:
                        car = _a.sent();
                        seat.car = car;
                        seat.color = post.color;
                        return [2 /*return*/, seat.save()];
                }
            });
        });
    };
    AppController.prototype.createCarport = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var carportEntity, car, manufacturer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        carportEntity = new carport_entity_1.CarportEntity();
                        return [4 /*yield*/, car_entity_1.CarEntity.findOne({ where: { id: +post.carId } })];
                    case 1:
                        car = _a.sent();
                        return [4 /*yield*/, manufacturer_entity_1.ManufacturerEntity.findOne({ where: { id: +post.manufacturerId } })];
                    case 2:
                        manufacturer = _a.sent();
                        carportEntity.car = car;
                        carportEntity.manufacturer = manufacturer;
                        carportEntity.serialNumber = post.serialNumber;
                        return [2 /*return*/, carportEntity.save()];
                }
            });
        });
    };
    AppController.prototype.getCarportById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var carport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, carport_entity_1.CarportEntity.findOne({ where: { id: id } })];
                    case 1:
                        carport = _a.sent();
                        return [2 /*return*/, carport];
                }
            });
        });
    };
    __decorate([
        common_1.Get()
    ], AppController.prototype, "getHello");
    __decorate([
        common_1.Get('/driver')
    ], AppController.prototype, "getDriver");
    __decorate([
        common_1.Get('/car')
    ], AppController.prototype, "getCars");
    __decorate([
        common_1.Get('/manufacturer')
    ], AppController.prototype, "getManufacturer");
    __decorate([
        common_1.Get('/wheel')
    ], AppController.prototype, "getWheels");
    __decorate([
        common_1.Get('/seat')
    ], AppController.prototype, "getSeat");
    __decorate([
        common_1.Get('/carport')
    ], AppController.prototype, "getCarport");
    __decorate([
        common_1.Post('/driver'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createDriver");
    __decorate([
        common_1.Post('/manufacturer'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createManufacturer");
    __decorate([
        common_1.Get('/car/:id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], AppController.prototype, "getCar");
    __decorate([
        common_1.Post('/car'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createCar");
    __decorate([
        common_1.Post('/wheel'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createWheel");
    __decorate([
        common_1.Post('/seat'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createSeat");
    __decorate([
        common_1.Post('/carport'),
        __param(0, common_1.Body())
    ], AppController.prototype, "createCarport");
    __decorate([
        common_1.Get('/carport/:id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], AppController.prototype, "getCarportById");
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
