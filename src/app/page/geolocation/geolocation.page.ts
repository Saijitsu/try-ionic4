import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/service/geolocation.service';

@Component({
 selector: 'app-geolocation',
 templateUrl: './geolocation.page.html',
 styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
 latitude: number;
 longitude: number;

 constructor(private geolocationService: GeolocationService) {
  this.geolocationService.getPosition()
  }

 ngOnInit() {
 }

}