import { Injectable } from '@angular/core';
import { Animal } from '../class/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  KEY = 'animals';
  

  constructor() { }

  getAnimals(i: number): Animal {
    return this.readAnimals()[i];
  }

  readAnimals(): Animal[] {
    return JSON.parse(localStorage.getItem(this.KEY));
  }

  saveAnimals(liste: Animal[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(liste));
  }

  addOne(animal: Animal){
    
  }

}
