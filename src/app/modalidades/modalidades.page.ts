import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Competencia } from '../model/competencia';
import { Modalidade  } from '../model/modalidade';
import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';

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
    this.listarModalidades();
  }

  async listarModalidades() {
    let isso = this;
    var modalidade = new Modalidade();

    await modalidade.getModalidades().then(async function(snapshot) {
      var modalidades = Object.keys(snapshot); //pegar indices do objeto ou seja os codigos

      snapshot = await isso.bloquearModalidades(snapshot);

      for (var i = 0; i < modalidades.length; i++) {
        isso.modalidades.push(snapshot[modalidades[i]]); //transformar num array
      }
    });
    
  }

  bloquearModalidades(modalidades) {
    modalidades.forEach((mod, index) => {
      if(mod.codigo != "M001") {
        let modalidade = modalidades[index - 1];

        let competencias = modalidade.competencias.split(", ");
        let ultima_competencia = competencias[competencias.length - 1];

        let competencia = new Competencia();
        competencia.getCompetencia(ultima_competencia).then(competencia_dados => {
          let problemas = competencia_dados.problemas.split(", ");
          let ultimo_problema = problemas[problemas.length - 1];

          let usuario = new Usuario();
          usuario.getProblemasRespondidos().then(problemas => {
            let respondido = false;

            problemas.forEach(problema => {
              if(problema == ultimo_problema) {
                respondido = true;
              }
            });

            if(respondido) {
              mod.disabled = false;
            } else {
              mod.disabled = true;
            }

            respondido = false;
          })
        });
      } else {
        mod.disabled = false;
      }
    });

    return modalidades;
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
