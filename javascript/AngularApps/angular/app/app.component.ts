import {Component, Output, Input, EventEmitter} from '@angular/core';
// import {TaskService} from './services/task.service';
import {UserService} from './services/User/user.service'
import {RouterModule} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [UserService]

})


export class AppComponent {
}