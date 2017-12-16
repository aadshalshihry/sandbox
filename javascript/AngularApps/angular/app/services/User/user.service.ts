/**
 * Created by roman on 10/9/16.
 */

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    constructor(private http:Http){ }

    getUsers(){
        return this.http.get('/api/users')
            .map(res => res.json());
    }

    addUser(user){
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http
            .post(
                '/api/users',
                JSON.stringify(user),
                {headers: header}
            )
            .map(res => res.json())
            .map(res => {
                if(res.success){
                    console.log("Success ....");
                } else {
                    console.log("Error >>>> ");
                }
            });
    }

    getOneUser(id){
        return this.http.get('/api/users/' + id)
            .map(res => res.json());
    }

    deleteUser(id){
        return this.http.delete('/api/users/' + id)
            .map(res => res.json());
    }
}
