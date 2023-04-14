"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CacheModule = void 0;
var common_1 = require("@nestjs/common");
var cache_service_1 = require("./cache.service");
var axios_1 = require("@nestjs/axios");
var CacheModule = /** @class */ (function () {
    function CacheModule() {
    }
    CacheModule_1 = CacheModule;
    CacheModule.forRoot = function (param) {
        return {
            module: CacheModule_1,
            imports: [axios_1.HttpModule],
            providers: [
                { provide: "CONFIG_OPTIONS", useValue: param },
                cache_service_1.CacheService
            ],
            exports: [cache_service_1.CacheService]
        };
    };
    var CacheModule_1;
    CacheModule = CacheModule_1 = __decorate([
        common_1.Module({})
    ], CacheModule);
    return CacheModule;
}());
exports.CacheModule = CacheModule;
