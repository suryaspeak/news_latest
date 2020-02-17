import { Component, ViewChild, ElementRef ,OnInit} from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map',{ static: true }) mapElement: ElementRef;
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
 


  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
  }

  ngOnInit() {
    // this.setCurrentLocation();
  }
 
    // Get Current Location Coordinates
    // private setCurrentLocation() {
    //   if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       this.latitude = position.coords.latitude;
    //       this.longitude = position.coords.longitude;
    //       this.zoom = 15;
    //     });
    //   }
    // }

 

 



}
