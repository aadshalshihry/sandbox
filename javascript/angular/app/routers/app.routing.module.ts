/**
 * Created by roman on 10/9/16.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserComponent} from "../components/User/user.component";
import {MapComponent} from "../components/Map/map.component";


@NgModule({
    import: [
        RouterModule.forRoot([
            {path: 'user', component: UserComponent},
            {path: 'map', component: MapComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }