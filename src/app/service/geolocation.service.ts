    
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  latitude: number;
  longitude: number;
  constructor(private geolocation: Geolocation) { }

  getPosition(){
    return this.geolocation.getCurrentPosition().then(
      data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      },
      err => console.log(err)
    );
  }

  setPosition(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     this.latitude = data.coords.latitude
     this.longitude = data.coords.longitude
    });
  }
}