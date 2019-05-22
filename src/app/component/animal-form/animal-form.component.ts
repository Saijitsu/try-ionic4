import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AnimalClass} from '../../enum/animal-class.enum';
import {Animal} from '../../class/animal';
import {AnimalService} from '../../service/animal.service';
import { Components } from '@ionic/core';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  name: FormControl;
  printName: FormControl;
  class: FormControl;
  childrenName: FormControl;
  femaleName: FormControl;
  soundName: FormControl;
  options: string[];

  @Input() modal: Components.IonModal;

  constructor(private fb: FormBuilder,
              private animalService: AnimalService) {
    this.options = Object.values(AnimalClass);
    this.animalForm = this.fb.group(
        {
          name: ['', Validators.required],
          printName: ['', Validators.required],
          class: ['', Validators.required],
          childrenName: [''],
          femaleName: [''],
          soundName: [''],
        }
    );
  }

  ngOnInit() {}

    addAnimal() {
        if (this.animalForm.valid) {
            let newAnimal = new Animal();
            newAnimal.name = this.animalForm.get('name').value;
            newAnimal.printName = this.animalForm.get('printName').value;
            newAnimal.class = this.animalForm.get('class').value;
            newAnimal.childrenName = this.animalForm.get('childrenName').value;
            newAnimal.femaleName = this.animalForm.get('femaleName').value;
            newAnimal.soundName = this.animalForm.get('soundName').value;
            this.animalService.addOne(newAnimal);
            this.modal.dismiss('Animal ajouté');
        }
    }

    cancel() {
        this.modal.dismiss('Annulation');
    }
}
