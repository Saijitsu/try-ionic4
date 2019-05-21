import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/class/animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) { 
    this.animals = this.animalService.readAnimals();
  }

  addAnimal(animal: Animal){
    this.animalService.addOne(animal);
  }

  ngOnInit() {
  }

}
