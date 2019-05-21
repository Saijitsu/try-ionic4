import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/class/animal';
import { AnimalService } from 'src/app/service/animal.service';
import { ModalController } from '@ionic/angular';
import { AnimalFormComponent } from 'src/app/component/animal-form/animal-form.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  animals: Animal[];

  constructor(
    private animalService: AnimalService,
    private modal: ModalController
    ) { 
    this.animals = this.animalService.readAnimals();
  }

  addAnimal(animal: Animal){
    this.animalService.addOne(animal);
  }

  ngOnInit() {
  }

  async openFormModal(){
    const formModal= await this.modal.create({
      component: AnimalFormComponent
    });
    return await formModal.present();
  }

}
