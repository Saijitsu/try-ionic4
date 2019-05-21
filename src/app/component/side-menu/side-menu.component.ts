import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, Platform} from '@ionic/angular';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  pages: any[] ;
  constructor(
      private router: Router,
      private menu: MenuController
  ) {
    this.pages = [
      {name: 'home', title: 'Accueil'},
      {name: 'grid', title: 'Grille'},
      {name: 'alert', title: 'Boite'}
    ];
  }

  selectPage(name: string){
    this.router.navigateByUrl('/' + name);
    this.menu.close();
  }

  ngOnInit() {}

}