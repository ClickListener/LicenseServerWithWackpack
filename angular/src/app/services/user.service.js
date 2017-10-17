/**
 * Created by zhangxu on 2017/7/17.
 */
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
var UserService = UserService_1 = (function () {
    function UserService(http) {
        this.http = http;
        this.header = {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        };
    }
    /**
     * 登录服务3
     * @param userInfo
     */
    UserService.prototype.signIn = function (userInfo) {
        var _this = this;
        var url = '/api/auth/signin';
        console.log(JSON.stringify(userInfo));
        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(function (res) {
            console.log("res.json = " + JSON.stringify(res.json()));
            _this.user = res.json();
            return res.json();
        })
            .catch(UserService_1.handleError);
    };
    /**
     * 注册服务
     * @param userInfo
     *
     */
    UserService.prototype.signUp = function (userInfo) {
        var url = '/api/auth/signup';
        console.log(JSON.stringify(userInfo));
        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(function (res) {
            console.log("res.json() = " + res.json());
        })
            .catch(UserService_1.handleError);
    };
    /**
     * 登出服务
     * @returns {Promise<TResult|T>}
     */
    UserService.prototype.signOut = function () {
        console.log("signOut()");
        var url = '/api/auth/signout';
        this.http.get(url, this.header)
            .toPromise()
            .then(function () {
            console.log("res.json() = ");
        })
            .catch(UserService_1.handleError);
    };
    UserService.handleError = function (error) {
        console.log('An error occurred', JSON.stringify(error)); //for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = UserService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
var UserService_1;
//# sourceMappingURL=user.service.js.map