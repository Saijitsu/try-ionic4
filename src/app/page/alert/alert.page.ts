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
      header: 'Add text message',
      subHeader: 'Yes we can',
      cssClass: 'alert',
      message: `This message is in a modal box`,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'bg-secondary',
        handler: () => {
          this.message = 'You cancel it!';
        }
      },
      {
        text: 'Valid',
        cssClass: 'bg-primary',
        handler: (data) => {
          this.message = `This is my message: ${data.name}`;
        }
      }],
      inputs:[
        {
          name:'name',
          type:'text',
          placeholder:'Add message!'
        }
      ]
    });
    await alert.present();
  }
}
