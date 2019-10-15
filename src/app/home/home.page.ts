import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private alertController: AlertController ) {}
 
  async emBreve() {
    const alert = await this.alertController.create({
      header: 'Função Indisponivel!',
      message:  'Fica atento(a)! Logo você poderá se cadastrar!',
      buttons: ['OK']
    });

    await alert.present();
  }


}
