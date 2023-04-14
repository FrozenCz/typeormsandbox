"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CacheService = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var CacheService = /** @class */ (function () {
    function CacheService(config, httpClient) {
        this.httpClient = httpClient;
        this.cacheServiceLogger = new common_1.Logger('CacheServiceLogger');
        this.url = undefined;
        if (!config.url) {
            this.cacheServiceLogger.error('You must provide URL');
        }
        this.url = config.url;
    }
    CacheService.prototype.saveCache = function (param) {
        this.checkIfUrlSpecified();
        this.httpClient.post(this.url, { key: param.key, url: param.value });
    };
    CacheService.prototype.loadCache = function (key) {
        var _this = this;
        this.checkIfUrlSpecified();
        var url = this.url + '/' + key;
        return this.httpClient.get(url).pipe(operators_1.map(function (axios) { return axios.data; })).toPromise()["catch"](function (reason) { return _this.cacheServiceLogger.error({ url: url, reason: reason }); });
    };
    CacheService.prototype.checkIfUrlSpecified = function () {
        if (!this.url) {
            throw new common_1.BadRequestException('You must specify url in cache module');
        }
    };
    CacheService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Optional()), __param(0, common_1.Inject('CONFIG_OPTIONS'))
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;
