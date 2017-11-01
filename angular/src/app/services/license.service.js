"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LicenseService = LicenseService_1 = (function () {
    function LicenseService(http) {
        this.http = http;
        this.header = {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        };
        this.url = '/license';
    }
    LicenseService.prototype.createNewLicense = function (licenseInfo) {
        var _this = this;
        console.info("licenseInfo = " + JSON.stringify(licenseInfo));
        // const url = '/api/auth/createNewLicense';
        return this.http.put(this.url, JSON.stringify(licenseInfo), this.header)
            .toPromise()
            .then(function (res) {
            _this.licenses = res.json().licenses;
            console.info('res = ' + JSON.stringify(_this.licenses));
            return res.json();
        })
            .catch(LicenseService_1.handleError);
    };
    LicenseService.prototype.updateLicense = function (licenseInfo) {
        var _this = this;
        console.info("licenseInfo = " + JSON.stringify(licenseInfo));
        return this.http.post(this.url, JSON.stringify(licenseInfo), this.header)
            .toPromise()
            .then(function (res) {
            _this.licenses = res.json().licenses;
            console.info('res = ' + JSON.stringify(_this.licenses));
            return res.json();
        })
            .catch(LicenseService_1.handleError);
    };
    LicenseService.handleError = function (error) {
        console.log('An error occurred', JSON.stringify(error)); //for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LicenseService;
}());
LicenseService = LicenseService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LicenseService);
exports.LicenseService = LicenseService;
var LicenseService_1;
//# sourceMappingURL=license.service.js.map