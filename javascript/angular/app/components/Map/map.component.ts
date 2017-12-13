/**
 * Created by roman on 10/9/16.
 */
// ref: https://angular-maps.com/docs/getting-started.html#package-installation

import {Component} from '@angular/core';
import {MapMarker} from '../../classes/mapMarker'
import {MarkerOptions} from "angular2-google-maps/core/services/google-maps-types";


@Component({
    moduleId: module.id,
    selector: 'my-map',
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }
    `],
    templateUrl: 'map.component.html'
})


export class MapComponent {
    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    }

    markerDragEnd($event: MapOptions){
        console.log("*******", $event);
    }



    // markerDragEnd(m: MapMarker, $event: MouseEvent) {
    //     console.log('dragEnd', m, $event);
    // }

    markers: MapMarker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ]
};