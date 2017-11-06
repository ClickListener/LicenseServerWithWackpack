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
var sweetalert2_1 = require("sweetalert2");
var CreateNewComponent = (function () {
    function CreateNewComponent(userService, router, licenseService) {
        this.userService = userService;
        this.router = router;
        this.licenseService = licenseService;
        console.log('createNew----------constructor()');
    }
    CreateNewComponent.prototype.ngDoCheck = function () {
    };
    CreateNewComponent.prototype.ngOnInit = function () {
    };
    CreateNewComponent.prototype.createNewLicense = function (installedPhoneNumber, totalUserNumber, BundleIdOrPackageName) {
        var _this = this;
        console.info('createNewLicense()');
        console.info('userId = ' + this.userService.user._id);
        console.info('installedPhoneNumber = ' + installedPhoneNumber);
        console.info('totalUserNumber = ' + totalUserNumber);
        console.info('BundleIdOrPackageName = ' + BundleIdOrPackageName);
        this.licenseService.createNewLicense({
            "userId": this.userService.user._id,
            "installedPhoneNumber": installedPhoneNumber,
            "totalUserNumber": totalUserNumber,
            "BundleIdOrPackageName": BundleIdOrPackageName
        })
            .then(function (res) {
            console.info('res = ' + JSON.stringify(res));
            //保存成功，跳转到管理界面
            //保存成功，跳转到管理界面
            _this.router.navigate(['/manager-license']);
            sweetalert2_1.default({
                position: 'bottom-right',
                type: 'success',
                title: 'Add new license successfully',
                showConfirmButton: false,
                timer: 2000
            }).catch(sweetalert2_1.default.noop);
        })
            .catch(function (err) {
            console.info('error = ' + err);
        });
    };
    return CreateNewComponent;
}());
CreateNewComponent = __decorate([
    core_1.Component({
        selector: 'create-newLicense',
        templateUrl: './createNew.component.html',
        styleUrls: ['createNew.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, license_service_1.LicenseService])
], CreateNewComponent);
exports.CreateNewComponent = CreateNewComponent;
//# sourceMappingURL=createNew.component.js.map