/**
 * Created by roman on 10/9/16.
 */

import {Component} from '@angular/core';
import {UserService} from '../../services/User/user.service';
import {User} from '../../classes/User'



@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})



export class UserComponent{
    //noinspection TypeScriptValidateTypes
    public currentUser: User = {};
    public list: User[];
    public postForm: boolean;
    public isGetOne: boolean;



    constructor(private userService:UserService){

        this.userService.getUsers()
            .subscribe(users => {
                this.list = users;
            });
        // getUsers();
        this.postForm = false;
        this.isGetOne = false;
    };

    // ngOnInit(){
    //     this.userService.getUsers()
    //         .subscribe(users => {
    //             this.list = users;
    //         });
        // this.getUsers();
        // this.postForm = false;
        // this.isGetOne = false;
    // };


    getUsers(){
        this.userService.getUsers()
            .subscribe(user => {
                this.list.push(user);
                // console.log(this.list);
            });
    };

    addUser(event){
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
            .subscribe(user => {
                this.list.push(user);
                // console.log(user);
                this.getUsers();
                this.currentUser = <User>{};
                this.postForm = false;
            });
    };

    getOneUser(id){
        this.userService.getOneUser(id)
            .subscribe(user => {
                this.currentUser = user;
                this.isGetOne = true;
            });
    };

    deleteUser(id){
        this.userService.deleteUser(id)
            .subscribe(user => {
                this.currentUser = <User>{};
                this.getUsers();

            });
    };

    

}