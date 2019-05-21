import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AnimalClass } from 'src/app/enum/animal-class.enum';

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

  constructor(private fb: FormBuilder) {
    this.options = Object.values(AnimalClass);
    this.animalForm = this.fb.group(
      {
        name: ['', Validators.required],
        printName: ['', Validators.required],
        class: ['', Validators.required],
        childrenName: [''],
        femaleName: [''],
        soundName: ['']
      }
    );
   }

  ngOnInit() {}

}
