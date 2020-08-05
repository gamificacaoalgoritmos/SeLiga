import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Modalidade  } from '../model/modalidade';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.page.html',
  styleUrls: ['./modalidades.page.scss'],
})
export class ModalidadesPage implements OnInit {
  modalidades = [];

  ngOnInit() {
  }

  navCtrl: any;
  constructor( private alertController: AlertController) {
    var modalidade = new Modalidade();
    var isso = this;
    
    modalidade.getModalidades().then(function(snapshot) {
      var modalidades = Object.keys(snapshot); //pegar indices do objeto ou seja os codigos
      for (var i = 0; i < modalidades.length; i++) {
        isso.modalidades.push(snapshot[modalidades[i]]); //transformar num array
      }
    })
    
  }
 
  async emBreve() {
    const alert = await this.alertController.create({
      header: 'Modalidade em desenvolvimento...',
      message:  'Esta modalidade ainda está sendo desenvolvida pela equipe do Se Liga Aê! :(... <br> Mas você ainda pode aprender esta linguagem com as apostilas disponíveis em nosso site!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
