import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeStorageService {
  savedName: any;

  constructor(private nativeStorage: NativeStorage) { }

  saveFirstName(firstName: string): void {
    this.nativeStorage.setItem('first-name', firstName).then(
      () => console.log('Nom sauvegardé')
    )
  }

  getFirstName() {
    return this.nativeStorage.getItem('first-name').then(
      name => this.savedName = name
    );;
  }
}