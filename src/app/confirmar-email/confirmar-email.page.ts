import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrls: ['./confirmar-email.page.scss'],
})
export class ConfirmarEmailPage implements OnInit {

  dados = {};
  private loading: any

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    ) { }

  ngOnInit() {
  }

  async verificarEmail(dados) {

    await this.presentLoading();
    let usuario = new Usuario();
    let usuario_existe = false;
  
    usuario.getUsuarios().then(usuarios => {
      
      try {
        usuarios.forEach(usuario => {
          if(usuario.email == dados.email) {
            usuario_existe = true
            this.enviarEmail(dados.email);
            this.emailEnviado();
          }
        });
  
        if(!usuario_existe) {
          this.emailNaoEncontrado();
        }
      } catch(error) {
        console.log(error);
      } finally {
        this.loading.dismiss();
      }
        
    });
    
    

  }

  enviarEmail(email) {
    firebase.auth().sendPasswordResetEmail(email);
  }

  async emailEnviado() {
    const alert = await this.alertController.create({
      header: 'Email enviado',
      message: "Instruções de como recuperar sua conta foram enviadas para seu email",
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['login']);
          }
        }
      ]
    });
    await alert.present();
  }

  async emailNaoEncontrado() {
    const alert = await this.alertController.create({
      header: 'Email inválido!',
      message: "Seu email não foi encontrado, crie uma conta primeiro",
      buttons: ["Ok"]
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...', });
    return this.loading.present();

  }

}
