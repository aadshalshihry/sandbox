import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
// import {RouterModule} from '@angular/router'
import {AppRoutingModule} from "./routers/app.routing.module";
import {AppComponent} from './app.component';
import {UserComponent} from './components/User/user.component';
import {MapComponent} from './components/Map/map.component';

// import {TasksComponent} from './components/tasks/tasks.component'

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule,
                    FormsModule,
                    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC2gM7J_mPx_wE9HpS_PevQuMvaseZPsT8'})
                    // AppRoutingModule
                        // RouterModule.forRoot([
                        //     {path: '', component: AppComponent},
                        //     {path: 'user', component: UserComponent},
                        //     {path: 'map', component: MapComponent}
                        // ])
                    ],
    declarations: [ AppComponent, UserComponent, MapComponent],
    bootstrap:    [ AppComponent]
})
export class AppModule { }