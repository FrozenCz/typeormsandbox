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
exports.CarportEntity = void 0;
var typeorm_1 = require("typeorm");
var manufacturer_entity_1 = require("./manufacturer.entity");
var car_entity_1 = require("./car.entity");
var CarportEntity = /** @class */ (function (_super) {
    __extends(CarportEntity, _super);
    function CarportEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CarportEntity.prototype, "manufacturer", {
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarportEntity.prototype, "car", {
        set: function (value) {
            this._car = value;
        },
        enumerable: false,
        configurable: true
    });
    CarportEntity.prototype.getManufacturer = function () {
        return manufacturer_entity_1.ManufacturerEntity.findOne({ where: { id: this.manufacturerId } });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CarportEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], CarportEntity.prototype, "serialNumber");
    __decorate([
        typeorm_1.ManyToOne(function () { return manufacturer_entity_1.ManufacturerEntity; }),
        typeorm_1.JoinColumn({ name: 'manufacturerId', referencedColumnName: 'id' })
    ], CarportEntity.prototype, "_manufacturer");
    __decorate([
        typeorm_1.Column()
    ], CarportEntity.prototype, "manufacturerId");
    __decorate([
        typeorm_1.ManyToOne(function () { return car_entity_1.CarEntity; }),
        typeorm_1.JoinColumn({ name: 'carId', referencedColumnName: 'id' })
    ], CarportEntity.prototype, "_car");
    __decorate([
        typeorm_1.Column()
    ], CarportEntity.prototype, "carId");
    CarportEntity = __decorate([
        typeorm_1.Entity("carport")
    ], CarportEntity);
    return CarportEntity;
}(typeorm_1.BaseEntity));
exports.CarportEntity = CarportEntity;
