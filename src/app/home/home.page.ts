import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController, 
    private authService: AuthService, 
    private router: Router
    ) {
       this.authService.getAuth().onAuthStateChanged(user => {
         if(user) this.router.navigate(['modalidades'])
       })
    }
 
  async emBreve() {
    const alert = await this.alertController.create({
      header: 'Função Indisponivel!',
      message:  'Fica atento(a)! Logo você poderá se cadastrar!',
      buttons: ['OK']
    });

    await alert.present();
  }


}
