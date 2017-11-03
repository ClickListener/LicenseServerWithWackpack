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
/**
 * Created by zhangxu on 2017/9/19.
 */
var core_1 = require("@angular/core");
var user_service_1 = require("../../../services/user.service");
var router_1 = require("@angular/router");
var license_service_1 = require("../../../services/license.service");
var License_1 = require("../../../model/License");
var ManagerComponent = (function () {
    function ManagerComponent(userService, router, licenseService) {
        this.userService = userService;
        this.router = router;
        this.licenseService = licenseService;
    }
    ManagerComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
    };
    ManagerComponent.prototype.ngDoCheck = function () {
        this.licenses = this.licenseService.licenses;
        console.info("this.licenses = " + JSON.stringify(this.licenses));
    };
    ManagerComponent.prototype.createNewLicense = function () {
        this.router.navigate(['./create-newLicense']);
    };
    ManagerComponent.prototype.modifyLicense = function (licenseId, installedPhoneNumber, totalUserNumber, BundleIdOrPackageName) {
        var license = new License_1.License();
        license._id = licenseId;
        license.installedPhoneNumber = installedPhoneNumber;
        license.totalUserNumber = totalUserNumber;
        license.BundleIdOrPackageName = BundleIdOrPackageName;
        this.licenseService.license = license;
        this.router.navigate(['./modify-license']);
    };
    ManagerComponent.prototype.deleteLicense = function (licenseId) {
        this.licenseService.deleteLicense(licenseId)
            .then(function (res) {
            console.log('ManagerComponent-res = ' + JSON.stringify(res));
        })
            .catch(function (error) {
            console.log("ManagerComponent--error = " + JSON.stringify(error));
        });
    };
    return ManagerComponent;
}());
ManagerComponent = __decorate([
    core_1.Component({
        selector: 'manager-license',
        templateUrl: './manager.component.html',
        styleUrls: ['manager.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, license_service_1.LicenseService])
], ManagerComponent);
exports.ManagerComponent = ManagerComponent;
//# sourceMappingURL=manager.component.js.map