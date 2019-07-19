import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.page.html',
  styleUrls: ['./modalidades.page.scss'],
})
export class ModalidadesPage implements OnInit {

  ngOnInit() {
  }

  navCtrl: any;
  constructor( private alertController: AlertController ) {}
 
  async emBreve() {
    const alert = await this.alertController.create({
      header: 'Modalidade em desenvolvimento...',
      message:  'Esta modalidade ainda está sendo desenvolvida pela equipe do Se Liga Aê! :(... <br> Mas você ainda pode aprender esta linguagem com as apostilas disponíveis em nosso site!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
