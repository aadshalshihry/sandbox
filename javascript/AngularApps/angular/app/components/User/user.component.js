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
var user_service_1 = require('../../services/User/user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        var _this = this;
        this.userService = userService;
        //noinspection TypeScriptValidateTypes
        this.currentUser = {};
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.list = users;
        });
        // getUsers();
        this.postForm = false;
        this.isGetOne = false;
    }
    ;
    // ngOnInit(){
    //     this.userService.getUsers()
    //         .subscribe(users => {
    //             this.list = users;
    //         });
    // this.getUsers();
    // this.postForm = false;
    // this.isGetOne = false;
    // };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (user) {
            _this.list.push(user);
            // console.log(this.list);
        });
    };
    ;
    UserComponent.prototype.addUser = function (event) {
        var _this = this;
        event.preventDefault();
        var user = {
            firstName: this.currentUser.firstName,
            lastName: this.currentUser.lastName,
            email: this.currentUser.email,
            username: this.currentUser.username,
            password: this.currentUser.password,
            isCooker: this.currentUser.isCooker
        };
        this.userService.addUser(user)
            .subscribe(function (user) {
            _this.list.push(user);
            // console.log(user);
            _this.getUsers();
            _this.currentUser = {};
            _this.postForm = false;
        });
    };
    ;
    UserComponent.prototype.getOneUser = function (id) {
        var _this = this;
        this.userService.getOneUser(id)
            .subscribe(function (user) {
            _this.currentUser = user;
            _this.isGetOne = true;
        });
    };
    ;
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id)
            .subscribe(function (user) {
            _this.currentUser = {};
            _this.getUsers();
        });
    };
    ;
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map