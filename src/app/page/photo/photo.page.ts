import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/service/camera.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  constructor(private cameraService: CameraService) { }

  myPhoto: any;

  ngOnInit() {
    
  }

  takePhoto(){
    this.cameraService.takePhoto().then((photo) => {
      this.myPhoto = photo= 'data:image/jpeg;base64,' + photo;
     // this.ngOnInit()
    });
  }

}