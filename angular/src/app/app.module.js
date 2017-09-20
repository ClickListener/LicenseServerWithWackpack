"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by zhangxu on 2017/6/30.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./components/app/app.component");
var app_routing_module_1 = require("./app-routing.module");
var sign_in_component_1 = require("./components/user/user_signIn/sign-in.component");
var sign_up_component_1 = require("./components/user/user_signUp/sign-up.component");
var home_component_1 = require("./components/home/home.component");
var user_service_1 = require("./services/user.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var createNew_component_1 = require("./components/license/license_createNew/createNew.component");
var manager_component_1 = require("./components/license/license_manager/manager.component");
var modify_component_1 = require("./components/license/license_modify/modify.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            sign_in_component_1.SignInComponent,
            sign_up_component_1.SignUpComponent,
            home_component_1.HomeComponent,
            createNew_component_1.CreateNewComponent,
            manager_component_1.ManagerComponent,
            modify_component_1.ModifyComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [user_service_1.UserService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map