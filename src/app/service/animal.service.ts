import {Injectable} from '@angular/core';
import {Animal} from '../class/animal';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {
    private static KEY = 'animals';
    constructor() {
    }
    getAnimal(name: string): Animal {
        const animals = this.readAnimals()
            .filter(animal => animal.name === name);
        return animals[0];
    }
    readAnimals(): Animal[] {
        if (!localStorage.getItem(AnimalService.KEY)) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem(AnimalService.KEY));
        }
    }
    saveAnimals(liste: Animal[]): void {
        localStorage.setItem(AnimalService.KEY, JSON.stringify(liste));
    }
    deleteAll() {
        localStorage.removeItem(AnimalService.KEY);
    }
    addOne(animal: Animal) {
        let animals = this.readAnimals();
        if (!animals) {
            animals = [];
        }
        animals.push(animal);
        this.saveAnimals(animals);
    }
}
