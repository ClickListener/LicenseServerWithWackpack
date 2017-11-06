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
var router_1 = require("@angular/router");
var license_service_1 = require("../../../services/license.service");
var user_service_1 = require("../../../services/user.service");
var ModifyComponent = (function () {
    function ModifyComponent(licenseService, userService, router) {
        this.licenseService = licenseService;
        this.userService = userService;
        this.router = router;
        this.license = licenseService.license;
        console.log('ModifyComponent---------license = ' + JSON.stringify(this.license));
    }
    //更新License
    ModifyComponent.prototype.updateLicense = function () {
        var _this = this;
        this.licenseService.updateLicense({
            'userId': this.userService.user._id,
            'licenseId': this.license._id,
            'installedPhoneNumber': this.license.installedPhoneNumber,
            'totalUserNumber': this.license.totalUserNumber,
            'BundleIdOrPackageName': this.license.BundleIdOrPackageName
        })
            .then(function (res) {
            console.info('res = ' + JSON.stringify(res));
            //保存成功，跳转到管理界面
            _this.router.navigate(['/manager-license']);
        })
            .catch(function (error) {
            console.info('error = ' + JSON.stringify(error));
        });
    };
    return ModifyComponent;
}());
ModifyComponent = __decorate([
    core_1.Component({
        selector: 'modify-license',
        templateUrl: './modify.component.html',
        styleUrls: ['modify.component.css']
    }),
    __metadata("design:paramtypes", [license_service_1.LicenseService, user_service_1.UserService, router_1.Router])
], ModifyComponent);
exports.ModifyComponent = ModifyComponent;
//# sourceMappingURL=modify.component.js.map