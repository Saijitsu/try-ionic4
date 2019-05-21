import { Component } from '@angular/core';
import { Vegetable } from '../../class/vegetable';
import { Fruit } from '../../class/fruit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = "Fruits and vegetables!"
  fruits: Array<Fruit> = [];
  vegetables: Array<Vegetable> = [];
  newVegetable: string;
  newFruit: string;


  constructor() {
    this.loadFruits();
    this.loadVegetables();
  }
 
  loadFruits() {
    this.fruits.push(new Fruit('Citron', 1));
    this.fruits.push(new Fruit('Amande', 1));
    this.fruits.push(new Fruit('Châtaigne', 1));
    this.fruits.push(new Fruit('Cerise', 1));
    this.fruits.push(new Fruit('Pêche', 1));
    this.fruits.push(new Fruit('Coing', 1));
    this.fruits.push(new Fruit('Figue', 1));
    console.log('fruit: ', this.fruits)
  }
  loadVegetables() {
    this.vegetables.push(new Vegetable('Ail', 2));
    this.vegetables.push(new Vegetable('Champignon', 2));
    this.vegetables.push(new Vegetable('Chou-fleur', 2));
    this.vegetables.push(new Vegetable('Potiron', 2));
    this.vegetables.push(new Vegetable('Poireau', 2));
    this.vegetables.push(new Vegetable('Radis', 2));
    this.vegetables.push(new Vegetable('Patate Douce', 2));
    console.log('vegetable: ', this.vegetables)

  }
  
  addItem(nameList, value) {
  nameList === 'vegetables'? 
  nameList.push(new Vegetable(value, 1)) 
  : nameList.push(new Fruit(value, 1))
  }


  removeItem(nameList, i){
    nameList.splice(i, 1)
  }
}