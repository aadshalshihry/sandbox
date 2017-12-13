/**
 * Created by roman on 10/9/16.
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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var header = new http_1.Headers();
        header.append('Content-Type', 'application/json');
        return this.http
            .post('/api/users', JSON.stringify(user), { headers: header })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                console.log("Success ....");
            }
            else {
                console.log("Error >>>> ");
            }
        });
    };
    UserService.prototype.getOneUser = function (id) {
        return this.http.get('/api/users/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/users/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map