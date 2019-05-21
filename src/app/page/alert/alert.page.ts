import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  message: string;
  constructor(private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'avertissement',
      subHeader: 'attention',
      cssClass: 'alert',
      message: `Ce message s'affiche dans une boîte de dialogue`,
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'bg-secondary',
        handler: () => {
          this.message = 'Annulation';
        }
      },
      {
        text: 'Valider',
        cssClass: 'bg-primary',
        handler: () => {
          this.message = 'Validation obscure';
        }
      }]
    });
    await alert.present();
  }
}
