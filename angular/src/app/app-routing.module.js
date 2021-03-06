"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by zhangxu on 2017/7/13.
 */
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var sign_in_component_1 = require("./components/user/user_signIn/sign-in.component");
var sign_up_component_1 = require("./components/user/user_signUp/sign-up.component");
var home_component_1 = require("./components/home/home.component");
var manager_component_1 = require("./components/license/license_manager/manager.component");
var createNew_component_1 = require("./components/license/license_createNew/createNew.component");
var modify_component_1 = require("./components/license/license_modify/modify.component");
/**
 * 路由模块
 */
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'sign-in',
        component: sign_in_component_1.SignInComponent
    },
    {
        path: 'sign-up',
        component: sign_up_component_1.SignUpComponent
    },
    {
        path: 'manager-license',
        component: manager_component_1.ManagerComponent
    },
    {
        path: 'create-newLicense',
        component: createNew_component_1.CreateNewComponent
    },
    {
        path: 'modify-license/:licenseId',
        component: modify_component_1.ModifyComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map