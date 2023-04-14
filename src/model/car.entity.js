"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarEntity = void 0;
var typeorm_1 = require("typeorm");
var manufacturer_entity_1 = require("./manufacturer.entity");
var driver_entity_1 = require("./driver.entity");
var seat_entity_1 = require("./seat.entity");
var wheel_entity_1 = require("./wheel.entity");
var CarEntity = /** @class */ (function (_super) {
    __extends(CarEntity, _super);
    function CarEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CarEntity.prototype, "drivers", {
        set: function (value) {
            this._drivers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarEntity.prototype, "manufacturer", {
        set: function (value) {
            this.manufacturerId = value.id;
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CarEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], CarEntity.prototype, "name");
    __decorate([
        typeorm_1.ManyToOne(function () { return manufacturer_entity_1.ManufacturerEntity; }, function (manufacturer) { return manufacturer.id; })
    ], CarEntity.prototype, "_manufacturer");
    __decorate([
        typeorm_1.Column()
    ], CarEntity.prototype, "manufacturerId");
    __decorate([
        typeorm_1.ManyToMany(function () { return driver_entity_1.DriverEntity; }),
        typeorm_1.JoinTable({
            name: 'cars_drivers',
            inverseJoinColumn: { name: 'driver_id', referencedColumnName: 'id' },
            joinColumn: { name: 'car_id', referencedColumnName: 'id' }
        })
    ], CarEntity.prototype, "_drivers");
    __decorate([
        typeorm_1.OneToMany(function () { return wheel_entity_1.WheelEntity; }, function (wheel) { return wheel.car; })
    ], CarEntity.prototype, "_wheels");
    __decorate([
        typeorm_1.OneToMany(function () { return seat_entity_1.SeatEntity; }, function (seat) { return seat.car; })
    ], CarEntity.prototype, "_seats");
    CarEntity = __decorate([
        typeorm_1.Entity('car')
    ], CarEntity);
    return CarEntity;
}(typeorm_1.BaseEntity));
exports.CarEntity = CarEntity;
