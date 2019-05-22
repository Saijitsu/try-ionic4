import { Component, OnInit } from '@angular/core';
import { NativeStorageService } from 'src/app/service/native-storage.service';


@Component({
  selector: 'app-native-storage',
  templateUrl: './native-storage.page.html',
  styleUrls: ['./native-storage.page.scss'],
})
export class NativeStoragePage implements OnInit {

  firstName: string;
  savedName: string;

  constructor(private nativeStorageService: NativeStorageService) { }

  ngOnInit() {
  }

  login() {
    this.nativeStorageService.saveFirstName(this.firstName);
  }

  getFirstName() {
   this.savedName = this.nativeStorageService.savedName
  }
}